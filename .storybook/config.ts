import { configure } from '@storybook/react';
import '../src/index.css';

const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  console.log(req);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
