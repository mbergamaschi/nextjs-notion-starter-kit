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
  description: 'Micael Bergamaschi: Artista, fotógrafo especializado em circo e professor de tecido acrobático, trapézio e diretor de criação no Rio de Janeiro.',

  // social usernames (optional)
  // twitter: '',
  // github: '',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  //instagram: 'micaelbergamaschi',
  //youtube: '@MicaelBergamaschi', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  //medium: '@mbergamaschi',
  //whatsapp: '5521979528800',

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
     '/mostra-enclo-2026': '2ebfcab3c1fa8076ba83d9da3b28ac50',
     '/copyright-notice': '68fd308bf71441079a75f2a7b20ce798',
     '/lgpd': '12fcab3c1fa80e287adf6203e4789a4',
     '/cfc': 'da26539d457c4c29aebf5e807d4f28f5',
     '/ccc': '8a98a09e888a44da87ba5a382a0a2f10',
     '/portfolio': '2eafcab3c1fa803bba7fcdb646ab4c36',
     '/cup': 'ca1f3a5a0bcf4de9bf2540ce71dba8a4',
     '/2112': '04ade3c6e4c2476da44bca678d2b23db',
     '/artistas': '2ebfcab3c1fa80568603c312361abe7c',
     '/modalidades': '2ebfcab3c1fa8061aee6f0695afa0177',
     '/notas-direitos-autorais': '6052c6e813d54e58b4013d9d5d7c705b',
     '/mestras': '2ecfcab3c1fa8057b382d2777f347d95,
     '/espetaculos': '311fcab3c1fa80ed9390eae3ee303e12'
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
