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

└───  lib/ : Keep code that has been built

└───  src/ : Keep all the code in development

└───────── │   *.story.tsx : File used by StoryBook

└───────── │   ...

└───  README.md

└───  tsconfig.json : Copy from Button example

└───  package.json : Add "scripts": { "tsc": "tsc" }
                     "main" field points to entry point (Run when we call require('lib-name'))
                     "name": is 'lib-name' above. Use pattern: @vmodev/button
* Add a new dependency to package
    - Move to the package
    - Case 1: Install local dependency
    > lerna add @vmodev/button --scope=@vmodev/form
    Explain: Create a symlink from `form package` to `button package` inside our monorepo
    > import Button from '@vmodev/button'
    - Case 2: Install external dependency:
    > lerna add @react-google-maps/api --scope=@vmodev/googlemap
    - Case 3: A common dependency like React (used by all packages)
    > yarn add React --dev -W

* lerna run tsc : Run `tsc` in all packages and Build code from /src to /lib

### References
* https://jackcuthbert.dev/blog/managing-a-monorepo-with-lerna-typescript-react-jest/
* https://blog.logrocket.com/setting-up-a-monorepo-with-lerna-for-a-typescript-project-b6a81fe8e4f8/
* https://github.com/garmeeh/lerna-starter/blob/master/package.json
* https://dev.to/stereobooster/typescript-monorepo-for-react-project-3cpa
* https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d

