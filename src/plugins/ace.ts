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
  /**
   * Get the platform that we are running on.
   * If you are using Ionic, it is recommended to use the Ionic API for this functionality.
   * @returns {string|(function(): string)}
   */
  @CordovaProperty static get platform(): string {return ace.platform; }
}
export class AceNativeObject {
  /**
   * Invoke a static method of a class
   * @param nativeClassName
   * @param methodName
   * @param args
   */
  @Cordova()
  static invoke(nativeClassName: string, methodName: string, ...args): Promise<any> {return; }

  /**
   * Get a static field value of a class
   * @param nativeClassName
   * @param fieldName
   */
  @Cordova()
  static getField(nativeClassName: string, fieldName: string): Promise<any> {return; }

  /**
   * Set a static field value of a class
   * @param nativeClassName
   * @param fieldName
   * @param value
   */
  @Cordova()
  static setField(nativeClassName: string, fieldName: string, value: string): Promise<any> {return; }


  private _objectInstance: any;
  constructor(nativeClassName: string, ...args) {
    this._objectInstance = new ace.NativeObject(nativeClassName, args);
  }
  /**
   * Invoke an instance method of a class
   * @param methodName
   * @param args
   */
  @CordovaInstance()
  invoke(methodName: string, ...args): Promise<any> {return; }

  /**
   * Get an instance field value
   * @param fieldName
   */
  @CordovaInstance()
  static getField(fieldName: string): Promise<any> {return; }

  /**
   * Set an instance field value
   * @param fieldName
   * @param value
   */
  @CordovaInstance()
  static setField(fieldName: string, value: string): Promise<any> {return; }
}
export class AceAndroid {
  @Cordova()
  static getContext(): Promise<any> {return; }
}
