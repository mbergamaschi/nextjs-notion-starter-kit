import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'd818f436acf4441d9b8a65dd00bce579',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Micael Bergamaschi',
  domain: 'mbergamaschi.com',
  author: 'Micael Bergamaschi',

  // open graph metadata (optional)
  description: 'Micael Bergamaschi: Fotógrafo de circo, professor de aéreos, diretor criativo',

  // social usernames (optional)
  // twitter: '',
  // github: '',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
   youtube: 'channel/MicaelBergamaschi', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
   pageUrlOverrides: {
     '/aulas-manaca': '6b57f85f046b47d8b0d5be48f98fba9b',
     '/mostra-enclo-2026': '2ebfcab3c1fa8076ba83d9da3b28ac50'
   },
  //pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'Aulas de Tecido e Trapézio',
  //     pageId: '6b57f85f046b47d8b0d5be48f98fba9b'
  //   },
  //   {
  //     title: 'Proposta de Registro Visual: Mostra ENCLO 2026',
  //     pageId: '2ebfcab3c1fa8076ba83d9da3b28ac50'
  //   }
  // ]
})
