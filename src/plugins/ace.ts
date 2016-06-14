import {Plugin, Cordova, CordovaInstance, CordovaProperty, InstanceProperty} from './plugin';
declare var ace: any;
/**
 * @name Ace
 * @description
 * Add native power to your shared JavaScript codebase. Access any native device features, embed any native elements, and much more.
 * For more information please visit https://microsoft.github.io/ace/
 * **Disclaimer**: this plugin is still in pre-beta stage. We will build this ionic-native plugin futher as the Microsoft team develop their plugin.
 * @usage
 * ```typescript
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-ace',
  pluginRef: 'ace',
  repo: 'https://github.com/microsoft/ace',
  platforms: ['iOS', 'Android']
})
export class Ace {

}
export class AceNativeObject {
  private _objectInstance: any;
  constructor(nameOfNativeClass: string, param?: any) {
    this._objectInstance = new ace.NativeObject(nameOfNativeClass, param);
  }

  @Cordova()
  static invoke(nativeClassName: string, methodName: string, ...args): Promise<any> {return; }

  @CordovaInstance()
  invoke(methodName: string, ...args): Promise<any> {return; }

}