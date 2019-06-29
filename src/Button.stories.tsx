import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import React from 'react';
// import { text, boolean } from "@storybook/addon-knobs/react";

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hi</Button>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))
  .add('with label', () => (
      <Button label="Hello"/>
  ))