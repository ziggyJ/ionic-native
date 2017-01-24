import { Cordova, Plugin } from './plugin';

export interface SpinnerDialogIOSOptions {
  overlayOpacity?: number;
  textColorRed?: number;
  textColorGreen?: number;
  textColorBlue?: number;
}

/**
 * @name Spinner Dialog
 * @description
 * @usage
 * ```typescript
 * import { SpinnerDialog } from 'ionic-native';
 *
 *
 * SpinnerDialog.show();
 *
 * SpinnerDialog.hide();
 * ```
 * @interfaces
 * SpinnerDialogIOSOptions
 */
@Plugin({
  pluginName: 'SpinnerDialog',
  plugin: 'cordova-plugin-spinner-dialog',
  pluginRef: 'window.plugins.spinnerDialog',
  repo: 'https://github.com/Paldom/SpinnerDialog',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
export class SpinnerDialog {

  /**
   * Shows the spinner dialog
   * @param title {string} Spinner title (shows on Android only)
   * @param message {string} Spinner message
   * @param cancelCallback {boolean|function} Set to true to set spinner not cancelable. Or provide a function to call when the user cancels the spinner.
   * @param iOSOptions {object} Options for iOS only
   */
  @Cordova({
    sync: true
  })
  static show(title?: string, message?: string, cancelCallback?: any, iOSOptions?: SpinnerDialogIOSOptions): void {}

  /**
   * Hides the spinner dialog if visible
   */
  @Cordova({
    sync: true
  })
  static hide(): void {}

}
