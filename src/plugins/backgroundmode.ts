import { Cordova, CordovaFunctionOverride, Plugin } from './plugin';

import { Observable } from 'rxjs/Observable';

/**
 * Configurations items that can be updated.
 */
export interface BackgroundModeConfiguration {

  /**
   * Title of the background task
   */
  title?: String;

  /**
   * The text that scrolls itself on statusbar
   */
  ticker?: String;

  /**
   * Description of background task
   */
  text?: String;

  /**
   * if true plugin will not display a notification. Default is false.
   */
  silent?: boolean;

  /**
   * By default the app will come to foreground when taping on the notification. If false, plugin wont come to foreground when tapped.
   */
  resume?: boolean;

}

/**
* @name Background Mode
* @description
* Cordova plugin to prevent the app from going to sleep while in background.
* Requires Cordova plugin: cordova-plugin-background-mode. For more info about plugin, vist: https://github.com/katzer/cordova-plugin-background-mode
*@usage
* ```typescript
* import { BackgroundMode } from 'ionic-native';
*
* BackgroundMode.enable();
* ```
 *
 * @interfaces
 * BackgroundModeConfiguration
*/
@Plugin({
  pluginName: 'BackgroundMode',
  plugin: 'cordova-plugin-background-mode',
  pluginRef: 'cordova.plugins.backgroundMode',
  repo: 'https://github.com/katzer/cordova-plugin-background-mode',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
export class BackgroundMode {

  /**
  * Enable the background mode.
  * Once called, prevents the app from being paused while in background.
  */
  @Cordova({
    sync: true
  })
  static enable(): void { }

  /**
  * Disable the background mode.
  * Once the background mode has been disabled, the app will be paused when in background.
  */
  @Cordova()
  static disable(): Promise<any> { return; }

  /**
  * Checks if background mode is enabled or not.
  * @returns {boolean} returns a boolean that indicates if the background mode is enabled.
  */
  @Cordova({
    sync: true
  })
  static isEnabled(): boolean { return; }

  /**
  * Can be used to get the information if the background mode is active.
  * @returns {boolean} returns a boolean that indicates if the background mode is active.
  */
  @Cordova({
    sync: true
  })
  static isActive(): boolean { return; }

  /**
  * Override the default title, ticker and text.
  * Available only for Android platform.
  * @param {Configure} options List of option to configure. See table below
  */
  @Cordova({
    platforms: ['Android']
  })
  static setDefaults(options?: BackgroundModeConfiguration): Promise<any> { return; }

  /**
  * Modify the displayed information.
  * Available only for Android platform.
  * @param {Configure} options Any options you want to update. See table below.
  */
  @Cordova({
    platforms: ['Android']
  })
  static configure(options?: BackgroundModeConfiguration): Promise<any> { return; }

  /**
  * Called when background mode is activated.
  * @returns {Observable<any>} returns an observable that emits when background mode is activated
  */
  @CordovaFunctionOverride()
  static onactivate(): Observable<any> { return; };

  /**
  * Called when background mode is deactivated.
  * @returns {Observable<any>} returns an observable that emits when background mode is deactivated
  */
  @CordovaFunctionOverride()
  static ondeactivate(): Observable<any> { return; };

  /**
  * Called when background mode fails
  * @returns {Observable<any>} returns an observable that emits when background mode fails
  */
  @CordovaFunctionOverride()
  static onfailure(): Observable<any> { return; };

}
