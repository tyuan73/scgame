/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

import { DefaultNavbar } from 'components/Navbars/Navbars';
import Page from 'components/Page';
import StickyFooter from 'components/Footers/StickyFooter';

import about from './about.md';

function action() {
  return {
    chunks: ['about'],
    title: about.title,
    component: (
      <>
        <DefaultNavbar />
        <Page {...about} />
        <StickyFooter />
      </>
    ),
  };
}

export default action;
