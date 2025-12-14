export function middleware(request) {
  const host = request.headers.get('host')
  const url = new URL(request.url)

  if (host === 'blog.velvetmaid.my.id' && url.pathname === '/') {
    return new Response(null, {
      headers: {
        'x-middleware-rewrite': '/works'
      }
    })
  }

  if (host === 'docs.velvetmaid.my.id' && url.pathname === '/') {
    return new Response(null, {
      headers: {
        'x-middleware-rewrite': '/docs'
      }
    })
  }
}

export const config = {
  matcher: ['/']
}
