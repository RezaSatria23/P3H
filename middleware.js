export function middleware(request) {
  const url = new URL(request.url)
  
  // Jika request datang langsung (tidak melalui Cloudflare)
  if (!request.headers.get('cf-worker')) {
    return new Response('Access denied', { status: 403 })
  }
}