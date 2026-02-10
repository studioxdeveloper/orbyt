import { rewrite } from '@vercel/functions';

/** Host-basert routing: riktig prototype til riktig domene */
const HOST_MAP: Record<string, string> = {
  'orbyttimeline.studiox.tech': '/index.html',
  'orbytapp.studiox.tech': '/prototype/app.html',
  'orbytdashboard.studiox.tech': '/prototype/dashboard.html',
  'orbytlink.studiox.tech': '/prototype/linkinbio.html',
};

const DEFAULT_PAGE = '/prototype/app.html';

export const config = {
  matcher: ['/(.*)'],
};

export default function middleware(request: Request) {
  const host = request.headers.get('host') || '';
  const destination = HOST_MAP[host] ?? DEFAULT_PAGE;

  const url = new URL(request.url);
  url.pathname = destination;
  return rewrite(url);
}
