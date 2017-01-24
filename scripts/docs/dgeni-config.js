var Package = require('dgeni').Package;
var jsdocPackage = require('dgeni-packages/jsdoc');
var nunjucksPackage = require('dgeni-packages/nunjucks');
var typescriptPackage = require('./typescript-package');
var linksPackage = require('./links-package');
var gitPackage = require('dgeni-packages/git');
var path = require('path');
var semver = require('semver');
var fs = require('fs');
var _ = require('lodash');
var config = require('../config.json');
var projectPackage = require('../../package.json');

// Define the dgeni package for generating the docs
module.exports = function(currentVersion) {

  return new Package('ionic-v2-docs',
                     [jsdocPackage, nunjucksPackage, typescriptPackage,
                      linksPackage, gitPackage])

// .processor(require('./processors/latest-version'))
.processor(require('./processors/jekyll'))
.processor(require('./processors/remove-private-members'))
.processor(require('./processors/hide-private-api'))
.processor(require('./processors/collect-inputs-outputs'))

// for debugging docs
// .processor(function test(){
//   return {
//
//     $runBefore: ['rendering-docs'],
//     $process: function(docs){
//       docs.forEach(function(doc){
//         if (doc.name == "Camera"){
//
//           // console.log(doc.tags);
//           // doc.tags.forEach(function(tag){
//           //   if(tag.tagName == 'classes'){
//           //
//           //   }
//           // });
//
//           // doc.moduleDoc.exports.forEach(function(d,i){
//           //   if(d.name === 'CameraOptions') {
//           //     console.log('Name: ' + d.name);
//           //     console.log('Type: ' + d.docType);
//           //     console.log('First member: ', d.members[0]);
//           //   }
//           // });
//
//
//           // var exports = doc.exportSymbol.parent.exports;
//           // for(var p in exports) {
//           //   if(p == 'CameraOptions')
//           //   {
//           //     var x = exports[p];
//           //     console.log(x.members.quality);
//           //   }
//           // }
//           // doc.members.forEach(function(method){
//           //   if (method.name === "getPicture") {
//           //     console.log(method);
//           //   }
//           // })
//         }
//       })
//     }
//   }
// })

.config(function(log) {
  log.level = 'error'; //'silly', 'debug', 'info', 'warn', 'error'
})

.config(function(renderDocsProcessor, computePathsProcessor, versionInfo) {

  versions = [];
  // new version, add it to the versions list
  if (currentVersion != 'nightly' && !_.includes(versions, currentVersion)) {
    versions.unshift(currentVersion);
  }
  //First semver valid version is latest
  var latestVersion = _.find(versions, semver.valid);
  versions = versions.map(function(version) {
    // We don't separate by versions so always put the docs in the root
    var folder = '';
    return {
      href: '/' + config.v2DocsDir.replace('content/',''),
      folder: folder,
      name: version
    };
  });

  var versionData = {
    list: versions,
    current: _.find(versions, {name: currentVersion}),
    latest: _.find(versions, {name: latestVersion}) || _.first(versions)
  };

  renderDocsProcessor.extraData.version = versionData;
  renderDocsProcessor.extraData.versionInfo = versionInfo;
  computePathsProcessor.pathTemplates = [{
    docTypes: ['class', 'var', 'function', 'let'],
    getOutputPath: function(doc) {
      var docPath = doc.name + '/index.md';
      var path = 'content/' + config.v2DocsDir + '/' +  docPath;

      return path;
    }
  }];
})

//configure file reading
.config(function(readFilesProcessor, readTypeScriptModules) {

  // Don't run unwanted processors since we are not using the normal file reading processor
  readFilesProcessor.$enabled = false;
  readFilesProcessor.basePath = path.resolve(__dirname, '../..');

  readTypeScriptModules.basePath = path.resolve(path.resolve(__dirname,
                                                '../..'));
  readTypeScriptModules.sourceFiles = [
    'src/index.ts'
  ];
})

.config(function(parseTagsProcessor) {
  parseTagsProcessor.tagDefinitions = parseTagsProcessor.tagDefinitions
                                        .concat(require('./tag-defs/tag-defs'));
})

// .config(function(parseTagsProcessor) {
//   // We actually don't want to parse param docs in this package as we are
//   // getting the data out using TS
//   parseTagsProcessor.tagDefinitions.forEach(function(tagDef) {
//     console.log(tagDef);
//     if (tagDef.name === 'param') {
//       tagDef.docProperty = 'paramData';
//       tagDef.transforms = [];
//     }
//   });
// })

// Configure links
.config(function(getLinkInfo) {
  getLinkInfo.useFirstAmbiguousLink = false;
})

// Configure file writing
.config(function(writeFilesProcessor) {
  writeFilesProcessor.outputFolder  = config.sitePath;
})

// Configure rendering
.config(function(templateFinder, templateEngine) {

  // Nunjucks and Angular conflict in their template bindings so change the Nunjucks
  // Also conflict with Jekyll
  templateEngine.config.tags = {
    variableStart: '<$',
    variableEnd: '$>',
    blockStart: '<@',
    blockEnd: '@>',
    commentStart: '<#',
    commentEnd: '#>'
  };

  // add custom filters to nunjucks
  templateEngine.filters.push(
    require('./filters/capital'),
    require('./filters/code'),
    require('./filters/dump')
  );

  templateFinder.templateFolders.unshift(path.resolve(__dirname, 'templates'));

  // Specify how to match docs to templates.
  templateFinder.templatePatterns = [
    '${ doc.template }',
    '${ doc.docType }.template.html',
    'common.template.html'
  ];
});

};
