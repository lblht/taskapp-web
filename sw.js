if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const d=e=>n(e,c),t={module:{uri:c},exports:o,require:d};i[c]=Promise.all(s.map((e=>t[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BmMhrqT3.js",revision:null},{url:"assets/index-DfnqSAmO.css",revision:null},{url:"index.html",revision:"53dbc4ccec58cce03de1ea5b04945a27"},{url:"registerSW.js",revision:"b69ebe0af840473a7cefdbb1d712a141"},{url:"favicon.ico",revision:"2926e955691a09662a944e2c0f7511fd"},{url:"icons/pwa-192x192.png",revision:"9793edab84ee9c7bcb1f6f2b2c74ced0"},{url:"icons/pwa-512x512.png",revision:"dfbfa2ec15ce5940f09dc0eb176fb6b6"},{url:"icons/pwa-maskable-192x192.png",revision:"159a7d1ecfbd55915d5cfee8f6d3f779"},{url:"icons/pwa-maskable-512x512.png",revision:"6bb088a91c15d88d60da4d7452d2342b"},{url:"manifest.webmanifest",revision:"54af81c9581daf4f053d97863ee2dd7b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
