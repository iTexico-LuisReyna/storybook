import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ButtonComponent } from './Button.component';
storiesOf('Button', module)
  .add('with text', () => <ButtonComponent>Hello Button</ButtonComponent>)
  .add('with some emoji', () => <ButtonComponent>🦕 🦖</ButtonComponent>);
