import { withAuth } from "next-auth/middleware"
import { NextResponse } from 'next/server'
import GoogleProvider from "next-auth/providers/google";

export default withAuth(
  function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/python_api')) {
      if (request.nextUrl.origin === 'http://localhost:3000') {
        return NextResponse.rewrite(new URL(request.nextUrl.pathname.slice(11), 'http://localhost:5000'))
      } else {
        return NextResponse.rewrite(new URL(request.nextUrl.pathname.slice(11), 'https://flask-render-example-amfx.onrender.com'))
      }
    }
  }, {
    providers: [
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          authorization: {
          params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
              }
          }
      }),
    ],
    secret: process.env.SECRET,
  }
)
 
export const config = {
  matcher: ['/python_api/(.*)', '/app/(.*)']
}