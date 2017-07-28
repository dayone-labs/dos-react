# DOS React starter kit

Welcome to [DayOne.pl](http://dayone.pl) React starter kit.
The only purpose of this project is to get you up and running with React JS project as fast as possible with some sane defaults.

This project is not a playground or training stuff. It's meant to stay with you also when your app goes into production.

## What's included

### [React JS](https://facebook.github.io/react/)
You have everything configured to use React with JSX and ES6.
There's a [Babel](http://babeljs.io/) transpiler configured with **es2015** and **stage-2** plugins installed, so you can use things like lambdas, destructuring and classes.

For more info about which features are enabled check:
[preset-es2015](https://babeljs.io/docs/plugins/preset-es2015/)
[preset-stage-2](https://babeljs.io/docs/plugins/preset-stage-2/)

### [Lodash](https://lodash.com)
You can immediately use all utilities and functional goodies from Lodash 4.
just `import {map} from 'lodash'` or `import {map} from 'lodash/fp'`, whichever style you prefer.

There's also a Lodash Babel plugin installed, so your bundle will only contain stuff that you really used (thanks to Webpack [tree shaking](https://webpack.js.org/guides/tree-shaking/))

### [Redux](http://redux.js.org)
**TODO**


## Getting Started

To start developing your React app you need to:

1. Install [Node JS](http://nodejs.org) (latest LTS version will be best)
2. Clone this repo or download contents as ZIP
3. Open terminal and navigate to project
4. Run `npm install` to fetch all dependencies
5. Run `npm start` to start development server and edit some files

## Production build

This starter kit is also configured to prepare a production build. It contains stuff like:

* Performance optimized output code
* Uglification and minification
* `console.log` statements removal
* `NODE_ENV=production`

### Running production build


## Authors

Marek Piechut [@marekpiechut](http://twitter.com/@marekpiechut)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
