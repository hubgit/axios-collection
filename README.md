# Example usage

* `node --harmony` for Node 9.
* `node --harmony-async-iteration` for Node 8.

```js
require('axios-debug-log')
const collection = require('axios-collection')

const journals = collection('https://api.github.com/search/repositories', {
  params: {
    sort: 'stars',
    order: 'desc',
    q: 'language:javascript'
  },
  headers: {
    'User-Agent': 'axios-collection'
  }
})

(async () => {
  for await (const journal of journals) {
    console.log(journal)
  }
})

```
