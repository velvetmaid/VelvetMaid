export function middleware(request) {
  const url = new URL(request.url)
  const host = request.headers.get('host')

  // blog subdomain → works
  if (host === 'blog.velvetmaid.my.id' && url.pathname === '/') {
    url.pathname = '/works'
    return new Response(null, {
      status: 200,
      headers: {
        'x-middleware-rewrite': url.toString()
      }
    })
  }

  // docs subdomain → docs
  if (host === 'docs.velvetmaid.my.id' && url.pathname === '/') {
    url.pathname = '/docs'
    return new Response(null, {
      status: 200,
      headers: {
        'x-middleware-rewrite': url.toString()
      }
    })
  }

  return
}
