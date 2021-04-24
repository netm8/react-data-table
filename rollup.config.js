import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'example/src/components/DataTable/index.js',
        format: 'esm',
        banner: '/* eslint-disable */',
      },
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      del({ targets: ['dist/*', 'example/src/components/DataTable'] }),
      postcss({
        extract: false,
        modules: true,
        use: ['sass'],
      }),
      typescript(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];