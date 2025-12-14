import { NextResponse } from 'next/server'

export function middleware(req) {
  const host = req.headers.get('host')
  const pathname = req.nextUrl.pathname

  if (host === 'blog.velvetmaid.my.id' && pathname === '/') {
    return NextResponse.rewrite(new URL('/works', req.url))
  }

  if (host === 'docs.velvetmaid.my.id' && pathname === '/') {
    return NextResponse.rewrite(new URL('/docs', req.url))
  }
}
