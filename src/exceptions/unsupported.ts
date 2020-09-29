export class UnsupportedError extends Error {
  constructor() {
    super(
      /* eslint-disable max-len */
      '`vue-ztext` requires `transform-style: preserve-3d` browser support to work correctly. Please update your browser to use `vue-ztext`.',
    );
  }
}
