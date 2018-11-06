# Charts

Charts help to visualise information. To do this, we use [Uber's react-vis](https://github.com/uber/react-vis) library, which they use extensively for their own internal tools. It is a lightweight wrapper written on top of D3.

When you choose to add charts to your application, there is some additional setup required to ensure that the charts are styled correctly.

If you're using a framework similar to `create-react-app`, including these styles is as easy as a single import on the relevant chart component:

```
@import "~react-vis/dist/style";
```

Alternatively, you can include the styles on the `index.html` page using the following:

```
<link rel="stylesheet" href="https://unpkg.com/react-vis/dist/style.css">
```
