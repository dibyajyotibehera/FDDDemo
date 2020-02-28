import {createFeature, assertNoRootAppElm} from 'feature-u';
import ContainerApp from './component/ContainerApp';
import React from 'react';

export default createFeature({
  name: 'containerApp',

  // fassets: {
  //   use: [
  //     // our usage contract
  //     'mainPage.miniAppA.link',
  //     'mainPage.miniAppA.route',
  //   ],
  // },

  appWillStart: ({fassets, curRootAppElm}) => {
    assertNoRootAppElm(curRootAppElm, '<ContainerApp/>');
    return <ContainerApp />;
  },
});
