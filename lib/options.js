module.exports = {

  // The level at which to log
  //  error  1
  //  warn   2
  //  info   3
  //  log    4
  logLevel: 3,

  // Whether the crawler only allows reciprocal rel="me" links
  // true will give less results, but with less chance of error
  strict: false,

  // The number of links crawled in a row without any
  // successful validations before the crawling of any
  // subsequent links is abandoned.
  crawlLimit: 3,

  // The number of links crawled within one domain before 
  // the crawling of any subsequent links is abandoned.
  domainLimit: 3,

  // If set to true then links at deeper path depths than
  // that of the shallowest on the same domain will be
  // discarded.
  stripDeeperLinks: true,

  // Wheather a request should use the cache 
  useCache: true,

  // The length of time that graphs and links are kept in the
  // cache before being discarded. In milliseconds.
  cacheTimeLimit: 3600000,  // 3600000 = 1hr

  // The maximum number of items to keep in cache before
  // the oldest are discarded. Use to limit memory use.
  cacheItemLimit: 10000,  

  // the HTTP headers to use when requesting 
  // resources from the internet
  httpHeaders: {
    'Accept': '*/*',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'User-Agent': 'node.js'
  }

}