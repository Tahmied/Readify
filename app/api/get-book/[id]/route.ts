import dbConnect from "@/lib/dbConnect"
import Book from "@/model/Book"
import { NextRequest } from "next/server"

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    console.log(id)
    try {
        await dbConnect()
        const book = await Book.findById(id)
        return Response.json(
            { book: book }
        )
    } catch (error) {
        console.log(error)
        return Response.json(
            { error: 'error' }, { status: 503 }
        )
    }
}