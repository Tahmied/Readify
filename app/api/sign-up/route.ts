import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    await dbConnect()
    return NextResponse.json({
        'message': "first api in nextjs"
    })
}