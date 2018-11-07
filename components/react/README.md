# React Component Library

React framework specific implementations of the [styles/theme](/styles/theme) library, providing numerous components as low-level styled constructs. To do this, we use CSS-in-JS ([styled-components](https://github.com/styled-components/styled-components)) to ensure that components are atomic, with no mapping between components and styles. Consequently, this means making use of this library adds no additional build-time complexity to your React application.

_That said, all components are completely compatible with any pre-existing "SASS Loader" already present in your application, as the library exposes them as standard React components (a la "ready for styling")._

## Visual Regression Testing
![](test-storybook)

This library implements visual regression testing inside Storybook, testing each component inside a headless chrome browser (inside Docker) using [Loki](#TODO).

Before running the tests, ensure that Docker is running on your machine and you have started the Storybook server. Tests can then be executed with `npm run test-storybook`.

#### Updating Reference Images
When working on a component, it may break the test suite. To update the reference images, for a legitimate change, using `./node_modules/.bin/loki update`.

[test-storybook]: .github/images/test-storybook.min.gif "Running tests with Loki"
