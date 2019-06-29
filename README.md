### Setup
* Install yarn (not npm)
* yarn add -g lerna
* git clone https://github.com/vnscriptkid/Lerna-StoryBook-Typescript-Boilerplate.git
* Install Eslint Addon on your IDE (VSCode)
* yarn install
* yarn storybook

### Add a new Component
* lerna create package-name
* Mimic config from the Button component
package
│   README.md
│   tsconfig.json : Copy from Button example
│
└─── lib/ : Keep code that has been built
│  
└─── src/
    │   *.story.tsx : File used by StoryBook
    │   ...
* lerna run tsc : Build code from /src to /lib
