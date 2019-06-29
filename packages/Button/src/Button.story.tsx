import { storiesOf } from "@storybook/react";
import { MyBtn } from "./Button";
import * as React from 'react';
// import { text, boolean } from "@storybook/addon-knobs/react";

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

storiesOf('My Custom Btn', module)
    .add('default', (): React.ReactElement => (
        <MyBtn></MyBtn>
    ));
