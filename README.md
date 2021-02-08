# Tiktok-analytics

> Add Tiktok-analytics to your nuxt.js application.

**Note:** Tiktok-analytic is not enabled in dev mode.
You can set environment variable `NODE_ENV` to `production` for testing in dev mode.

## Setup

- Add `tiktok-analytics` dependency using yarn or npm to your project
- Add `tiktok-analytics` to `modules` section of `nuxt.config.js`

```js
{
  modules: ['tiktok-analytics'],
}
```

## Configure

```js
{
  modules: ['tiktok-analytics'],
  tiktokAnalitics: {
    code: 'XXXXXX',
    // ...
  }
}
```