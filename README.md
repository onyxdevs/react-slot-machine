# React.js Slot Machine 🚀

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).<br />
The project includes extra packages and improved file structure.

## Dependencies that was added to CRA 👷🏼‍♀️

-   @testing-library/react-hooks
-   @types/enzyme
-   @wojtekmaj/enzyme-adapter-react-17 - an unofficial package for React v17
-   enzyme
-   node-sass

## Behaviour 🎰

1. The machine has 3 wheels. Each wheel has 4 symbols (strawberry, banana, orange and a monkey), the machine can show only one symbol per wheel.
2. The machine starts with the symbols in random positions.
3. The machine has a start button. When the it's clicked, the wheels start spinning (a symbol every, 50ms).
4. If the start button wasn't clicked, then the machine starts spinning automatically after 5 seconds.
5. If the stop button wasn't clicked after starting, the machine stops automatically after 10 seconds.
6. When stopped, if we have two identical inconsecutive symbols, the prize is $10, or two consecutive symbols, then the prize is $20. If we have a full match, the prize is $100.

## Folders and files structure 🗺

```
- src
    - components // reusable react components
        - Button
        - Message
        - Wheel

        // Each component has the following structure:
        - * ComponentName
            - ComponentName.module.scss
            - ComponentName.test.tsx
            - ComponentName.tsx
            - index.ts

    - containers
        // Each container has the same structure as components but some might have extra folders related to that specific container.
        - SlotMachine

    - hooks
        - useSlotMachine

    - lib // helpers
        - scripts
            - utils.ts
        - styles
            - abstracts
                - _mixins.scss
                - _variables.scss
            - main.scss

    - index.tsx
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## `Stay safe 😷`
