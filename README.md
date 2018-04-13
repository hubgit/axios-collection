# Example usage

* `node --harmony` for Node 9.
* `node --harmony-async-iteration` for Node 8.

```js
require('axios-debug-log')
const collection = require('axios-collection')

const repositories = collection('https://api.github.com/search/repositories', {
  params: {
    sort: 'stars',
    order: 'desc',
    q: 'language:javascript'
  },
  headers: {
    'User-Agent': 'axios-collection'
  }
})

const fetch = async () => {
  for await (const item of items) {
    console.log(item)
  }
}

fetch()
  .then(() => {
    console.info('finished')
  })
  .catch(error => {
    console.error(error)
  })
```
