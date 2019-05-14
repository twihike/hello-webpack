# hello-webpack

## Usage
```bash
yarn run build
# or
yarn build
```

## How would I set this up myself?
```bash
# install yarn

# create project
mkdir <project_name>
cd <project_name>
yarn init

# webpack
yarn add -D webpack webpack-cli
yarn add -D webpack-dev-server
yarn add -D webpack-merge

# basic plugin
yarn add -D case-sensitive-paths-webpack-plugin
yarn add -D clean-webpack-plugin
yarn add -D webpack-visualizer-plugin

# asset
yarn add -D file-loader
yarn add -D url-loader
yarn add -D raw-loader
yarn add -D papaparse
yarn add -D csv-loader
yarn add -D xml-loader

# html
yarn add -D html-loader
yarn add -D html-webpack-plugin

# css
yarn add -D style-loader
yarn add -D css-loader
yarn add -D mini-css-extract-plugin
# postcss
yarn add -D postcss-cli
yarn add -D browserslist # use postcss-preset-env and babel
yarn add -D postcss-preset-env
yarn add -D cssnano
yarn add -D postcss-loader
# sass
yarn add -D sass
yarn add -D sass-loader

# js
yarn add -D terser-webpack-plugin
yarn add -D thread-loader
# eslint
yarn add -D eslint
eslint --init # edit your .eslintrc.js
yarn add -D eslint-plugin-import
yarn add -D eslint-plugin-react
yarn add -D eslint-plugin-jsx-a11y
yarn add -D eslint-config-airbnb
yarn add -D eslint-loader
# prettier
yarn add -D prettier
yarn add -D eslint-config-prettier eslint-plugin-prettier
# babel
yarn add core-js@2
yarn add -D @babel/core @babel/cli
yarn add -D @babel/preset-env @babel/polyfill
yarn add -D babel-loader

# typescript
yarn add -D typescript
yarn tsc --init # edit your tsconfig.json
yarn add -D ts-loader
yarn add -D fork-ts-checker-webpack-plugin
# eslint
yarn add -D @typescript-eslint/eslint-plugin

# external lib
yarn add -D lodash
yarn add -D bulma
```
