const parseLinkHeader = require('parse-link-header')

module.exports = (axios) => async function* (url, options = {}) {
  const { parse, next, ...rest } = options

  while (url) {
    const response = await axios.get(url, rest)

    const items = parse ? parse(response) : response.data

    for (const item of items) {
      yield item
    }

    url = next ? next(response) : nextLinkHeader(response)
  }
}

function nextLinkHeader(response) {
  const links = parseLinkHeader(response.headers.link)

  if (!links || !links.next) {
    return null
  }

  // defend against APIs that continue sending the same next link
  if (links.next.url === response.config.url) {
    return null
  }

  return links.next.url
}
