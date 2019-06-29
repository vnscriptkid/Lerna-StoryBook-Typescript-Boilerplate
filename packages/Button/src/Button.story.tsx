import { storiesOf } from "@storybook/react";
import { MyBtn } from "./Button";
import * as React from 'react';
import { text } from "@storybook/addon-knobs/react";
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

storiesOf('My Custom Btn', module)
    .addDecorator(withKnobs)
    .add('default', (): React.ReactElement => (
        <MyBtn borderColor={text('Border Color', 'orange')}></MyBtn>
    ));
