import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {

  // Requested Path
  const requestedPath = request.nextUrl.pathname;

  // Fetch the session
  const session = "nadir";

if (!session && requestedPath !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
