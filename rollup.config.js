const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const postcss = require('rollup-plugin-postcss');
const terser = require('rollup-plugin-terser');

const packageJson = require("./package.json");

module.exports= {
  input: "src/widget/index.ts",
  output: [
    {
      file: "lib/index.js",
      format: "cjs",
      sourcemap: true,
    }
    // {
    //   file: "lib/index.esm.js",
    //   format: "esm",
    //   sourcemap: true,
    // },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: [".css"],
    }),
    terser.terser()
  ],
};