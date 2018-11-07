# DWP Styled Components

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![Known Vulnerabilities](https://snyk.io/test/github/dwp/dwp-components/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dwp/dwp-components?targetFile=package.json) [![Build Status](https://travis-ci.org/dwp/dwp-components.svg?branch=master)](https://travis-ci.org/dwp/dwp-components)

A set of shareable styles & component libraries, enabling you to start building user interfaces in React (and other frameworks).

Styles are separate and framework agnostic (where possible), component libraries implement the styles in a framework specific pattern. Components are implemented to reflect the [GDS Design System](https://design-system.service.gov.uk/).

---

## Getting Started
This repository is managed with the [Lerna](https://github.com/lerna/lerna) tool. Packages are bootstrapped separately to the repository itself, via the Lerna cli tool. Run the following commands to install necessary dependencies for the repository and individual libraries:

```
npm install
npm run lerna bootstrap
```

> For convenience _(and to avoid installing a global library)_ all `lerna <commands>` can be executed using `npm run lerna <commands>`.

---

| Library | Vulnerabilities |
|----|----|
|[styles/theme](/styles/theme)|[![Known Vulnerabilities](https://snyk.io/test/github/dwp/dwp-components/badge.svg?targetFile=styles/theme/package.json)](https://snyk.io/test/github/dwp/dwp-components?targetFile=package.json) |
| [components/react](/components/react)|[![Known Vulnerabilities](https://snyk.io/test/github/dwp/dwp-components/badge.svg?targetFile=components/react/package.json)](https://snyk.io/test/github/dwp/dwp-components?targetFile=package.json) |

---

## Contributing
If you want to contribute to styled-components please see our [contributing and community guidelines](/CONTRIBUTING.md), they'll help you get set up locally and explain the whole process.

Please also note that all repositories under the styled-components organization follow our [Code of Conduct](/CODE_OF_CONDUCT.md), make sure to review and follow it.


## Style Packages
* [Framework Agnostic Theme](/styles/theme)

## Component Packages
* [React](/components/react)
