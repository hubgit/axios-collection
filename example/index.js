require('axios-debug-log')
const axios = require('axios')
const collection = require('axios-collection')(axios)

const items = collection('https://api.github.com/search/repositories', {
  params: {
    sort: 'stars',
    order: 'desc',
    q: 'language:javascript'
  },
  headers: {
    'User-Agent': 'axios-collection',
    Accept: 'application/vnd.github.v3+json',
  },
  parse: response => response.data.items,
})

const fetch = async () => {
  let total = 100

  for await (const item of items) {
    console.log(item)

    if (--total === 0) break
  }
}

fetch()
  .then(() => {
    console.info('finished')
  })
  .catch(error => {
    console.error(error)
  })
