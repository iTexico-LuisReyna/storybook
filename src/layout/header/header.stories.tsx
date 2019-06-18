import React from 'react';

import { storiesOf } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { HeaderComponent } from './header.component';

const newViewPorts = {
  responsive: {
    name: 'Responsive',
    styles: {
      width: '100%',
      height: '100%',
    },
    type: 'desktop',
  },
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

storiesOf('Header', module)
  .addParameters({ viewport: { defaultViewport: 'iphone6' } })
  .add('story', () => <HeaderComponent username="Pepe" />, {
    viewport: { viewports: { ...INITIAL_VIEWPORTS, ...newViewPorts } },
  });
