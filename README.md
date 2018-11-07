# DWP Styled Components

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

A set of shareable styles & component libraries, enabling you to start building user interfaces in React (and other frameworks).

Styles are separate and framework agnostic (where possible), were as component libraries implement the styles in a framework specific pattern.

## Getting Started

This repository is managed with the [Lerna](https://github.com/lerna/lerna) tool. Packages are bootstrapped separately to the repository itself, via the Lerna cli tool. Run the following commands to install necessary dependencies for the repository and individual libraries:

```
npm install
npm run lerna bootstrap
```

> For convenience _(and to avoid installing a global library)_ all `lerna <commands>` can be executed using `npm run lerna <commands>`.

---

## Style Packages
* [Framework Agnostic Theme](/styles/theme)

## Component Packages
* [React](/components/react)
