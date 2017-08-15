/* jshint node: true */

const path = require('path');
const rollupUglify = require('rollup-plugin-uglify');
const es6Uglify = require('uglify-js-harmony');
const strip = require('rollup-plugin-strip');
const raptorCompiler = require('rollup-plugin-raptor-compiler');
const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
    raptorCompiler(),
    strip({
        debugger: true,
        functions: [ 'console.*', 'assert.*' ],
    }),
];

if (isProduction) {
    plugins.push(rollupUglify(
        { warnings: false },
        es6Uglify.minify
    ));
}

module.exports = {
    entry: path.resolve('src/main.js'),
    dest: path.resolve(`dist/main.js`),
    format: 'iife',
    plugins,
};
