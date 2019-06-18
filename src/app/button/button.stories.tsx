import React from 'react';

import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { ButtonComponent } from './button.component';

storiesOf('Button', module)
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('with disable', () => (
    <ButtonComponent disabled={boolean('Disabled', false)}>Hello Button</ButtonComponent>
  ))
  .add('with color', () => {
    const value = color('Color', '#ff00ff');

    return <ButtonComponent color={value}>Hello Button</ButtonComponent>;
  })
  .add('with dynamic text', () => {
    const name = text('Name', ' 🦕 🦖');
    const age = number('Age', 89);

    const content = `I am ${name} and I'm ${age} years old.`;
    return <ButtonComponent handleClick={action('button clicked')}>{content}</ButtonComponent>;
  });
