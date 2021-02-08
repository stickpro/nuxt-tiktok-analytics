
const path = require('path')

module.exports = function tiktokAnalitics (moduleOptions) {
  // Don't include on dev mode
  if (this.options.dev && process.env.NODE_ENV !== 'production') {
    return
  }

  const options = {
    useRuntimeConfig: this.options.publicRuntimeConfig ? 'tiktokAnalitics' : undefined,
    ...this.options.tiktokAnalitics,
    ...moduleOptions
  }

  const analiticsUrl = 'https://analytics.tiktok.com/i18n/pixel'  + '/events.js'

  options.analiticsUrl = analiticsUrl

  // Script preload
  this.options.head.link.push({
    href: analiticsUrl,
    rel: 'preload',
    as: 'script'
  })

  // Register plugin
  this.addPlugin({ src: path.resolve(__dirname, 'plugin.js'), ssr: false, options })
}

module.exports.meta = require('./package.json')
