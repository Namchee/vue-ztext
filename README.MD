# vue-ztext

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts) [![Vue 3](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://github.com/vuejs/vue-next) [![Vue 3D logo](https://img.shields.io/npm/v/@namchee/vue-ztext)](https://www.npmjs.com/package/@namchee/vue-ztext)

<p align="center">
  <img src="./docs/vue-ztext.png" title="Vue ZText" alt="Vue ZText" width="360" height="360" />
</p>

Ztext.js custom declarative component for Vue 3. Because you deserve declarative awesomeness.

## Installation

Execute this command on your favorite terminal

```js
npm install @namchee/vue-ztext

// if you are using yarn

yarn add @namchee/vue-ztext
```

Then, import the files in your entry point and don't forget to call the `use()` method!

```js
import ZText from '@namchee/vue-ztext';
// ...

app.use(ZText);
```

Now, you can use it anywhere in your app by using the `z-text` component

```vue
<template>
  <z-text>
    Hello World!
  </z-text>
</template>
```

## Props

The properties and the default values are basically the same as [the original implementation](https://github.com/bennettfeely/bennett/tree/master/ztext) with one new custom properties

Name | Type | Default | Description
---- | ---- | ------- | -----------
as | `string` (must be a valid HTML Element tag) | `div` | Determines the actual element to be rendered on the app. For example, if you want the component to be rendered as the main heading, fill `as` with `h1`

## Acknowledgements

- Bennett Feely, the original [ZText](https://github.com/bennettfeely/bennett/tree/master/ztext) creator

## License

This project is licensed under the [MIT License](./LICENSE)
