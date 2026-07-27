import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

export function proxy(request: NextRequest) {
  return handleI18nRouting(request);
}

export const config = {
  // Exclude /api so contact and other route handlers are not i18n-rewritten.
  matcher: [
    "/",
    "/(es|en)/:path*",
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
