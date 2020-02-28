/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {launchApp} from 'feature-u';
import features from './features/index';

export default launchApp({
  features: features,
  aspects: [],
  registerRootAppElm: function(rootAppElm) {
    // *3*
    AppRegistry.registerComponent(appName, () => rootAppElm);
  },
});
