/* jshint node: true */

const p = require('path');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify');
const strip = require('rollup-plugin-strip');
const raptor = require('rollup-plugin-raptor-compiler');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: p.resolve('src/main.js'),
    dest: p.resolve(`dist/main.js`),
    format: 'iife',
    moduleName: 'Main',
    sourceMap: true,
    globals: {},
    plugins: [
        raptor(),
        babel({
            babelrc: false,
            presets: [["env", { "modules": false }]]
        }),
        nodeResolve({ module: true }),
        isProduction && strip({
            debugger: true,
            functions: [ 'console.*', 'assert.*' ],
        }),
        isProduction && uglify({
            warnings: false,
        }),
    ].filter(Boolean),
};
