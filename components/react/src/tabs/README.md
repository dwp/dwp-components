# Tabs

The tabs component lets users navigate between related sections of content, displaying one section at a time.

The functionality is implemented by the [react-tabs](https://github.com/reactjs/react-tabs) library, we take their components, wrap them inside styled GOV.UK styles and export them via this library. **No functional changes have been made, which means that you can easily refer to the original documentation for the library, [here](https://github.com/reactjs/react-tabs)**.

The library is listed as a peer dependency, meaning that it is not installed by default. When you choose to include `<Tabs/>` within your application, you must manually add the dependency:

```
npm i react-tabs --save
```
