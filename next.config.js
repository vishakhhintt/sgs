module.exports = {
  env: {
   SECOND_SECRET: process.env.SECOND_SECRET,
  
 },
reactStrictMode: true,
trailingSlash: true,

serverRuntimeConfig: {
 // Will only be available on the server side
 mySecret: 'secret',
 secondSecret: process.env.SECOND_SECRET, // Pass through env variables
},
publicRuntimeConfig: {
 // Will be available on both server and client
 staticFolder: '/_next/static',
},
images: {
 domains: ['sgs.hintt.com'],
},
}
