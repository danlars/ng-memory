module.exports = {
  parser: 'postcss-scss',
  plugins: {
    tailwindcss:{},
    autoprefixer: {
      browsers: ['last 2 versions']
    },
  },
};
