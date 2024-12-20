
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/infodelphnoid/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 742, hash: 'a7da1d1b16cd8ab4505016efd14965d07e5e29c1899225e8cffa79d69cd95060', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1110, hash: '8aec1b266a867b4d603546920627aee6421026fe9e495036a946c07b52847da8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FRI4CJF3.css': {size: 188, hash: 'IUGUVvbkawM', text: () => import('./assets-chunks/styles-FRI4CJF3_css.mjs').then(m => m.default)}
  },
};
