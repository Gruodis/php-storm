# PhpStorm

## GoGo SpeedRacer

Steps to start:
```bash
npm init -y
npm install --save-dev webpack webpack-cli
npm install -D tailwindcss postcss autoprefixer
npm install --save-dev html-webpack-plugin webpack-dev-server css-loader style-loader postcss-loader
npm install --save-dev copy-webpack-plugin
npm install --save-dev postcss-preset-env

```
Config package.json
```bash
create src dir for webpack
create index.js in src

Eidit package.json:

  "scripts": {
    "start": "webpack"
  },
  
```
Create config file "postcss.config.js" for PostCSS and edit:
```bash
module.exports = {
plugins: [
require("tailwindcss")("./tailwind.config.js"),
require("autoprefixer")
]
}
```
Create config file "webpack.config.js" for Webpack and edit:
```bash
module.exports = {
plugins: [
require("tailwindcss")("./tailwind.config.js"),
require("autoprefixer")
]
}
```
Create config file for TailwindCSS
```bash
npx tailwind init
outcome: tailwind.config.js
```