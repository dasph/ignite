import { Icon, Icon192, Icon256, Icon512 } from './images'

const origin = process.env.ORIGIN

export default encodeURIComponent(JSON.stringify({
  name: 'Ignite',
  short_name: 'Ignite',
  description: 'A web service that is capable to recognize a song by its short excerpt.',
  scope: origin,
  start_url: origin,
  display: 'standalone',
  orientation: 'portrait',
  theme_color: '#101010',
  background_color: '#101010',
  icons: [{
    src: `${origin}${Icon}`,
    type: 'image/svg+xml',
    sizes: 'any',
    purpose: 'maskable'
  }, {
    src: `${origin}${Icon192}`,
    type: 'image/png',
    sizes: '192x192',
  }, {
    src: `${origin}${Icon256}`,
    type: 'image/png',
    sizes: '256x256',
  }, {
    src: `${origin}${Icon512}`,
    type: 'image/png',
    sizes: '512x512',
  }]
}))
