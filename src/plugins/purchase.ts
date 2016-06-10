import {Plugin, Cordova} from './plugin';

/**
 * @name Purchase
 * @description
 * @usage
 * Please do review the documentation provided on the plugin's GitHub Repository for detailed usage. This documentation can only help you understand the ionic-native implementation of the plugin.
 * ```
 * import {Purchase} from 'ionic-native';
 *
 * ...
 *
 *
 * ```
 */
@Plugin({
    plugin: 'cc.fovea.cordova.purchase',
    pluginRef: '',
    repo: 'https://github.com/j3k0/cordova-plugin-purchase',
    platforms: ['iOS', 'Android', 'Windows Phone'],
    install: 'ionic plugin add cc.fovea.cordova.purchase  --variable BILLING_KEY="<BILLING_KEY>"'
})
export class Purchase {

}