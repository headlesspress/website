// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'HeadlessPress',
  plugins: [],
  chainWebpack: config => {
    // SVG Support
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  
    // Postcss Libraries  
    config.module
    .rule('scss')
    .oneOf('normal')
    .use('postcss-loader')
    .tap(options => {
      options.plugins.unshift(...[
        require('lost'),
        require('autoprefixer'),
        require("postcss-custom-media")()
      ])
      if (process.env.NODE_ENV === 'production') {
        options.plugins.push(...[
          require('cssnano')({
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
            }]
          })
        ])
      }
      return options
    })
  }
}
