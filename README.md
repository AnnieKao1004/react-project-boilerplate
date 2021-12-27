# Start a React app from scratch (w/o CRA)

## Install React & React DOM

```text
yarn add react react-dom
```

## Install Babel

```text
yarn add -dev @babel/core @babel/preset-env @babel/preset-react @babel/cli

```

```text
touch babel.config.json
```

- `@babel/core`: Babel compiler core.
- `@babel/preset-env`: Allows you to use the latest JavaScript without needing to mircomanage which syntax transform are needed by target environments.
- `@babel/preset-react`: Support React JSX freatures.
- `@babel/cli`: Allows you to execute the commands which transpiles code.

  ```text
  npx babel index.js --out-dir lib
  // npx: 調用項目內部安裝 module
  // 手動修改 index.html 中的 <script> src 為 lib/index.js
  ```

## Install Webpack

The code transpiled by babel uses the `require` import syntax of `CommonJS` which are common in `Node.js`. But browser does not support the `require` syntax. Therefore, we need to modularizing and bundling code using `webpack`

```text
yarn add --dev webpack webpack-cli webpack-dev-server
```

To make `Babel` work with `Webpack`

```text
yarn add --dev babel-loader
```

Create `Webpack` configuration

```text
touch webpack.config.js
```

```text
npx webpack
// 打包
// 手動修改 index.html 中的 <script> src 為 dist/bundle.js
```

## Install html-webpack-plugin

Simplifies creation of HTML files to server the webpack bundles. (不需在打包完成後手動插入 script)

```text
yarn add --dev html-webpack-plugin
// 並於 webpack.config.js 新增 plugin
```

## Install webpack loaders for css

```text
yarn add --dev css-loader style-loader
```

- `css-loader`: load css file
- `style-loader`: inject `<style></style>` into `html`

If `SASS/SCSS` is used,

```text
yarn add --dev node-sass sass-loader
```

## Intall mini-css-extract-plugin

- Extract CSS into seperate file (instead of injecting `<style></style>` into html).
- It creates a CSS file per JS file which contains CSS.
- It supports On-Demand-Loading of CSS.

```text
yarn add --dev mini-css-extract-plugin
// 並於 webpack.config.js 新增 plugin
```

## Install webpack loaders for images

- .png / .jpg / .jpeg / .gif

  ```text
  yarn add --dev file-loader
  ```

- .svg  
  import SVG as React component

  ```text
  yarn add --dev @svgr/webpack
  ```
