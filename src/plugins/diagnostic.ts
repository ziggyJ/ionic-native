import {Cordova, Plugin, CordovaProperty} from './plugin';

/**
 * @name Diagnostic
 * @description
 * Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi
 *
 * @usage
 * ```typescript
 * import { Diagnostic } from 'ionic-native';
 *
 * let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); };
 * let errorCallback = (e) => console.error(e);
 *
 * Diagnostic.isCameraAvailable().then(successCallback).catch(errorCallback);
 *
 * Diagnostic.isBluetoothAvailable().then(successCallback, errorCallback);
 *
 *
 * Diagnostic.getBluetoothState()
 *   .then((state) => {
 *     if (state == Diagnostic.bluetoothStates.POWERED_ON){
 *       // do something
 *     } else {
 *       // do something else
 *     }
 *   }).catch(e => console.error(e));
 *
 * ```
 *
 */
@Plugin({
  pluginName: 'Diagnostic',
  plugin: 'cordova.plugins.diagnostic',
  pluginRef: 'cordova.plugins.diagnostic',
  repo: 'https://github.com/dpa99c/cordova-diagnostic-plugin'
})
export class Diagnostic {

  static permission = {
    READ_CALENDAR: 'READ_CALENDAR',
    WRITE_CALENDAR: 'WRITE_CALENDAR',
    CAMERA: 'CAMERA',
    READ_CONTACTS: 'READ_CONTACTS',
    WRITE_CONTACTS: 'WRITE_CONTACTS',
    GET_ACCOUNTS: 'GET_ACCOUNTS',
    ACCESS_FINE_LOCATION: 'ACCESS_FINE_LOCATION',
    ACCESS_COARSE_LOCATION: 'ACCESS_COARSE_LOCATION',
    RECORD_AUDIO: 'RECORD_AUDIO',
    READ_PHONE_STATE: 'READ_PHONE_STATE',
    CALL_PHONE: 'CALL_PHONE',
    ADD_VOICEMAIL: 'ADD_VOICEMAIL',
    USE_SIP: 'USE_SIP',
    PROCESS_OUTGOING_CALLS: 'PROCESS_OUTGOING_CALLS',
    READ_CALL_LOG: 'READ_CALL_LOG',
    WRITE_CALL_LOG: 'WRITE_CALL_LOG',
    SEND_SMS: 'SEND_SMS',
    RECEIVE_SMS: 'RECEIVE_SMS',
    READ_SMS: 'READ_SMS',
    RECEIVE_WAP_PUSH: 'RECEIVE_WAP_PUSH',
    RECEIVE_MMS: 'RECEIVE_MMS',
    WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',
    READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
    BODY_SENSORS: 'BODY_SENSORS'
  };

  @CordovaProperty
  static permissionStatus: {
    GRANTED: string;
    DENIED: string;
    NOT_REQUESTED: string;
    DENIED_ALWAYS: string;
    RESTRICTED: string;
    GRANTED_WHEN_IN_USE: string;
  };

  static locationAuthorizationMode = {
    ALWAYS: 'always',
    WHEN_IN_USE: 'when_in_use'
  };

  static permissionGroups = {
    CALENDAR: ['READ_CALENDAR', 'WRITE_CALENDAR'],
    CAMERA: ['CAMERA'],
    CONTACTS: ['READ_CONTACTS', 'WRITE_CONTACTS', 'GET_ACCOUNTS'],
    LOCATION: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
    MICROPHONE: ['RECORD_AUDIO'],
    PHONE: ['READ_PHONE_STATE', 'CALL_PHONE', 'ADD_VOICEMAIL', 'USE_SIP', 'PROCESS_OUTGOING_CALLS', 'READ_CALL_LOG', 'WRITE_CALL_LOG'],
    SENSORS: ['BODY_SENSORS'],
    SMS: ['SEND_SMS', 'RECEIVE_SMS', 'READ_SMS', 'RECEIVE_WAP_PUSH', 'RECEIVE_MMS'],
    STORAGE: ['READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE']
  };

  static locationMode = {
    HIGH_ACCURACY: 'high_accuracy',
    DEVICE_ONLY: 'device_only',
    BATTERY_SAVING: 'battery_saving',
    LOCATION_OFF: 'location_off'
  };

  static bluetoothState = {
    UNKNOWN: 'unknown',
    RESETTING: 'resetting', // iOS
    UNSUPPORTED: 'unsupported', // iOS
    UNAUTHORIZED: 'unauthorized', // iOS
    POWERED_OFF: 'powered_off',
    POWERED_ON: 'powered_on',
    POWERING_OFF: 'powering_off',
    POWERING_ON: 'powering_on'
  };


  /**
   * Checks if app is able to access device location.
   * @returns {Promise<any>}
   */
  @Cordova()
  static isLocationAvailable(): Promise<any> { return; }

  /**
   * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
   * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
   * @returns {Promise<any>}
   */
  @Cordova()
  static isWifiAvailable(): Promise<any> { return; }

  /**
   * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
   * application is authorized to use it.
   * @returns {Promise<any>}
   */
  @Cordova()
  static isCameraAvailable(): Promise<any> { return; }

  /**
   * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
   * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
   * @returns {Promise<any>}
   */
  @Cordova()
  static isBluetoothAvailable(): Promise<any> { return; }

  /**
   * Displays the device location settings to allow user to enable location services/change location mode.
   */
  @Cordova({ sync: true, platforms: ['Android', 'Windows 10'] })
  static switchToLocationSettings(): void { }

  /**
   * Displays mobile settings to allow user to enable mobile data.
   */
  @Cordova({ sync: true, platforms: ['Android', 'Windows 10'] })
  static switchToMobileDataSettings(): void { }

  /**
   * Displays Bluetooth settings to allow user to enable Bluetooth.
   */
  @Cordova({ sync: true, platforms: ['Android', 'Windows 10'] })
  static switchToBluetoothSettings(): void { }

  /**
   * Displays WiFi settings to allow user to enable WiFi.
   */
  @Cordova({ sync: true, platforms: ['Android', 'Windows 10'] })
  static switchToWifiSettings(): void { }

  /**
   * Returns true if the WiFi setting is set to enabled, and is the same as `isWifiAvailable()`
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android', 'Windows 10'] })
  static isWifiEnabled(): Promise<boolean> { return; }

  /**
   * Enables/disables WiFi on the device.
   * Requires `ACCESS_WIFI_STATE` and `CHANGE_WIFI_STATE` permissions on Android
   * @param state {boolean}
   * @returns {Promise<any>}
   */
  @Cordova({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] })
  static setWifiState(state: boolean): Promise<any> { return; }

  /**
   * Enables/disables Bluetooth on the device.
   * Requires `BLUETOOTH` and `BLUETOOTH_ADMIN` permissions on Android
   * @param state {boolean}
   * @returns {Promise<any>}
   */
  @Cordova({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] })
  static setBluetoothState(state: boolean): Promise<any> { return; }

  /**
   * Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  static isLocationEnabled(): Promise<boolean> { return; }

  /**
   * Checks if the application is authorized to use location.
   * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   * @returns {Promise<any>}
   */
  @Cordova()
  static isLocationAuthorized(): Promise<any> { return; }

  /**
   * Returns the location authorization status for the application.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  static getLocationAuthorizationStatus(): Promise<any> { return; }

  /**
   * Returns the location authorization status for the application.
   * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   *
   * mode - (iOS-only / optional) location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' })
  static requestLocationAuthorization(mode?: string): Promise<any> { return; }

  /**
   * Checks if camera hardware is present on device.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  static isCameraPresent(): Promise<any> { return; }

  /**
   * Checks if the application is authorized to use the camera.
   * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  static isCameraAuthorized(): Promise<any> { return; }

  /**
   * Returns the camera authorization status for the application.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  static getCameraAuthorizationStatus(): Promise<any> { return; }

  /**
   * Requests camera authorization for the application.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  static requestCameraAuthorization(): Promise<any> { return; }

  /**
   * Checks if the application is authorized to use the microphone.
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  static isMicrophoneAuthorized(): Promise<boolean> { return; }

  /**
   * Returns the microphone authorization status for the application.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  static getMicrophoneAuthorizationStatus(): Promise<any> { return; }

  /**
   * Requests microphone authorization for the application.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  static requestMicrophoneAuthorization(): Promise<any> { return; }

  /**
   * Checks if the application is authorized to use contacts (address book).
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  static isContactsAuthorized(): Promise<boolean> { return; }

  /**
   * Returns the contacts authorization status for the application.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  static getContactsAuthorizationStatus(): Promise<any> { return; }

  /**
   * Requests contacts authorization for the application.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  static requestContactsAuthorization(): Promise<any> { return; }

  /**
   * Checks if the application is authorized to use the calendar.
   *
   * Notes for Android:
   *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
   *
   * Notes for iOS:
   *   - This relates to Calendar Events (not Calendar Reminders)
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  static isCalendarAuthorized(): Promise<boolean> { return; }

  /**
   * Returns the calendar authorization status for the application.
   *
   * Notes for Android:
   *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return `GRANTED` status as permissions are already granted at installation time.
   *
   * Notes for iOS:
   *   - This relates to Calendar Events (not Calendar Reminders)
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  static getCalendarAuthorizationStatus(): Promise<any> { return; }

  /**
   * Requests calendar authorization for the application.
   *
   * Notes for iOS:
   *   - Should only be called if authorization status is NOT_DETERMINED. Calling it when in any other state will have no effect and just return the current authorization status.
   *   - This relates to Calendar Events (not Calendar Reminders)
   *
   * Notes for Android:
   *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
   *   - This requests permission for `READ_CALENDAR` run-time permission
   *   - Required permissions must be added to `AndroidManifest.xml` as appropriate - see Android permissions: `READ_CALENDAR`, `WRITE_CALENDAR`
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  static requestCalendarAuthorization(): Promise<any> { return; }

  /**
   * Opens settings page for this app.
   * On Android, this opens the "App Info" page in the Settings app.
   * On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  static switchToSettings(): Promise<any> { return; }

  /**
   * Returns the state of Bluetooth on the device.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  static getBluetoothState(): Promise<any> { return; }

  /**
   * Registers a function to be called when a change in Bluetooth state occurs.
   * @param handler
   */
  @Cordova({ platforms: ['Android', 'iOS'], sync: true })
  static registerBluetoothStateChangeHandler(handler: Function): void { }

  /**
   * Registers a function to be called when a change in Location state occurs.
   * @param handler
   */
  @Cordova({ platforms: ['Android', 'iOS'], sync: true })
  static registerLocationStateChangeHandler(handler: Function): void { }

  /**
   * Checks if high-accuracy locations are available to the app from GPS hardware.
   * Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorised to use location.
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  static isGpsLocationAvailable(): Promise<boolean> { return; }

  /**
   * Checks if location mode is set to return high-accuracy locations from GPS hardware.
   *   Returns true if Location mode is enabled and is set to either:
   *   - Device only = GPS hardware only (high accuracy)
   *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'] })
  static isGpsLocationEnabled(): Promise<any> { return; }

  /**
   * Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
   * Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorised to use location.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'] })
  static isNetworkLocationAvailable(): Promise<any> { return; }

  /**
   * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
   * Returns true if Location mode is enabled and is set to either:
   *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
   *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'] })
  static isNetworkLocationEnabled(): Promise<any> { return; }

  /**
   * Returns the current location mode setting for the device.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'] })
  static getLocationMode(): Promise<any> { return; }

  /**
   * Returns the current authorisation status for a given permission.
   * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   * @param permission
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'], callbackOrder: 'reverse' })
  static getPermissionAuthorizationStatus(permission: any): Promise<any> { return; }

  /**
   * Returns the current authorisation status for multiple permissions.
   * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   * @param permissions
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'], callbackOrder: 'reverse' })
  static getPermissionsAuthorizationStatus(permissions: any[]): Promise<any> { return; }

  /**
   * Requests app to be granted authorisation for a runtime permission.
   * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
   * @param permission
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'], callbackOrder: 'reverse' })
  static requestRuntimePermission(permission: any): Promise<any> { return; }

  /**
   * Requests app to be granted authorisation for multiple runtime permissions.
   * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   * @param permissions
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'], callbackOrder: 'reverse' })
  static requestRuntimePermissions(permissions: any[]): Promise<any> { return; }

  /**
   * Indicates if the plugin is currently requesting a runtime permission via the native API.
   * Note that only one request can be made concurrently because the native API cannot handle concurrent requests,
   * so the plugin will invoke the error callback if attempting to make more than one simultaneous request.
   * Multiple permission requests should be grouped into a single call since the native API is setup to handle batch requests of multiple permission groups.
   * @returns {boolean}
   */
  @Cordova({ sync: true })
  static isRequestingPermission(): boolean { return; }

  /**
   * Registers a function to be called when a runtime permission request has completed.
   * Pass in a falsey value to de-register the currently registered function.
   * @param handler {Function}
   */
  @Cordova({ sync: true })
  static registerPermissionRequestCompleteHandler(handler: Function): void { return; }

  /**
   * Checks if the device setting for Bluetooth is switched on.
   * This requires `BLUETOOTH` permission on Android
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  static isBluetoothEnabled(): Promise<boolean> { return; }

  /**
   * Checks if the device has Bluetooth capabilities.
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  static hasBluetoothSupport(): Promise<boolean> { return; }

  /**
   * Checks if the device has Bluetooth Low Energy (LE) capabilities.
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  static hasBluetoothLESupport(): Promise<boolean> { return; }

  /**
   * Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  static hasBluetoothLEPeripheralSupport(): Promise<boolean> { return; }

  /**
   * Checks if the application is authorized to use the Camera Roll in Photos app.
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['iOS'] })
  static isCameraRollAuthorized(): Promise<boolean> { return; }

  /**
   * Returns the authorization status for the application to use the Camera Roll in Photos app.
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['iOS'] })
  static getCameraRollAuthorizationStatus(): Promise<boolean> { return; }

  /**
   * Requests camera roll authorization for the application.
   * Should only be called if authorization status is NOT_REQUESTED.
   * Calling it when in any other state will have no effect.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['iOS'] })
  static requestCameraRollAuthorization(): Promise<any> { return; }

  /**
   * Checks if remote (push) notifications are enabled.
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['iOS'] })
  static isRemoteNotificationsEnabled(): Promise<boolean> { return; }

  /**
   * Indicates if the app is registered for remote (push) notifications on the device.
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['iOS'] })
  static isRegisteredForRemoteNotifications(): Promise<boolean> { return; }

  /**
   * Indicates the current setting of notification types for the app in the Settings app.
   * Note: on iOS 8+, if "Allow Notifications" switch is OFF, all types will be returned as disabled.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['iOS'] })
  static getRemoteNotificationTypes(): Promise<any> { return; }

  /**
   * Checks if the application is authorized to use reminders.
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['iOS'] })
  static isRemindersAuthorized(): Promise<boolean> { return; }

  /**
   * Returns the reminders authorization status for the application.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['iOS'] })
  static getRemindersAuthorizationStatus(): Promise<any> { return; }

  /**
   * Requests reminders authorization for the application.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['iOS'] })
  static requestRemindersAuthorization(): Promise<any> { return; }

  /**
   * Checks if the application is authorized for background refresh.
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['iOS'] })
  static isBackgroundRefreshAuthorized(): Promise<boolean> { return; }

  /**
   * Returns the background refresh authorization status for the application.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['iOS'] })
  static getBackgroundRefreshStatus(): Promise<any> { return; }

}
