const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs/react/preset',
    '@storybook/addon-knobs/register',
  ],
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '../src/'),
      '~assets': path.resolve(__dirname, '../src/assets/'),
      '~components': path.resolve(__dirname, '../src/components/'),
      '~manage': path.resolve(__dirname, '../src/components/manage'),
      '~ui': path.resolve(__dirname, '../src/components/ui/'),
      '$': path.resolve(__dirname, '../src/'),
      '$assets': path.resolve(__dirname, '../src/assets/'),
      '$components': path.resolve(__dirname, '../src/components/'),
      '$manage': path.resolve(__dirname, '../src/components/manage'),
      '$ui': path.resolve(__dirname, '../src/components/ui/')
    }

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'sass-resources-loader',
          options: {
            resources: path.resolve(__dirname, '../src/resources.scss')
          }
        }
      ]
    })

    return config
  },
};
