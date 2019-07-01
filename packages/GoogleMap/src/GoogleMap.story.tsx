import { storiesOf } from "@storybook/react";
import { MyMap } from "./GoogleMap";
import * as React from 'react';
// import { text } from "@storybook/addon-knobs/react";
import { withKnobs } from "@storybook/addon-knobs/react";
// const stories = storiesOf('Storybook Knobs', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
// stories.addDecorator(withKnobs);

// storiesOf('Button', module)
//     .add('with text', (): ReactElement => (
//         <Button label="hi" />
//     ))
//     .add('with emoji', (): ReactElement => (
//         <Button label="good"><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
//     ))
//     .add('with label', (): ReactElement => (
//         <Button label="Hello" />
//     ));

storiesOf('My Map', module)
    .addDecorator(withKnobs)
    .add('default', (): React.ReactElement => (
        <MyMap />
    ));

storiesOf('Block Div', module)
    .add('default', (): React.ReactElement => (
        <div style={{ backgroundColor: 'red', color: 'white', width: 300, height: 300 }}>Hello</div>
    ));