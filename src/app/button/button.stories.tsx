import React from 'react';

import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { ButtonComponent } from './button.component';

storiesOf('Button', module)
  .addDecorator(checkA11y)
  .add('with text', () => <ButtonComponent>Hello Button</ButtonComponent>)
  .add('with some emoji', () => <ButtonComponent>🦕 🦖</ButtonComponent>);
