import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("category");
  return Response.json({ message: "Hello from Next.js!" });
}
