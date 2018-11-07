# React Component Library

Provides React framework specific implementations of the [styles/components](/styles/components) library.

## Visual Regression Testing
<center>
![npm run storybook](test-storybook)
</center>

This library implements visual regression testing inside Storybook, testing each component inside a headless chrome browser (inside Docker) using [Loki](#TODO).

Before running the tests, ensure that Docker is running on your machine and you have started the Storybook server. Tests can then be executed with `npm run test-storybook`.

#### Updating Reference Images
When working on a component, it may break the test suite. To update the reference images, for a legitimate change, using `./node_modules/.bin/loki update`.

[test-storybook]: .github/images/test-storybook.min.gif "Running tests with Loki"
