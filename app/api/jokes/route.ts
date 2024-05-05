"use server";

import { NextRequest } from "next/server";
import { env } from "process";
import axios from "axios";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");
    let res = await axios.get(`${env.API_SERVER}`, {
      params: {
        category,
      },
    });

    return Response.json({ message: res?.data?.value }, { status: 200 });
  } catch (error: any) {
    return Response.json(
      { message: error.response.data.message },
      { status: 404 }
    );
  }
}
