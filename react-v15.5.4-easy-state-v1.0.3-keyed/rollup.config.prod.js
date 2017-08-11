import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import babili from 'rollup-plugin-babili'
import replace from 'rollup-plugin-replace'

export default {
  entry: 'src/Main.jsx',
  format: 'iife',
  moduleName: 'reactEasyState',
  dest: 'dist/main.js',
  plugins: [
    resolve({ jsnext: true, main: true, extensions: [ '.js', '.json', '.jsx' ] }),
    commonjs({
      namedExports: { 'node_modules/react/react.js': ['Component'] }
    }),
    babel({ exclude: 'node_modules/**' }),
    babili({ comments: false }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') })
  ]
}
