/* jshint node: true */

/**
 * This file builds the browser version in dist/ folder.
 */

const p = require('path');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const includePaths = require('rollup-plugin-includepaths');
const commonjs = require('rollup-plugin-commonjs');
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
            presets: [
                [
                    "es2015",
                    {
                        "modules": false
                    }
                ]
            ],
        }),
        includePaths({
            include: {
                'x:app': './src/app.js',
                'x:row': './src/row.js',
            },
        }),
        nodeResolve({
            module: true,
        }),
        commonjs({
            sourceMap: true,
        }),
        isProduction && strip({
            debugger: true,
            functions: [ 'console.*', 'assert.*' ],
        }),
        isProduction && uglify({
            warnings: false,
        }),
    ].filter(Boolean),
};
