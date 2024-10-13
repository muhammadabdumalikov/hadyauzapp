module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        cwd: 'babelrc',
      },
    ],
    ['@babel/plugin-transform-private-methods', {loose: true}],
    'react-native-reanimated/plugin',
  ],
};
