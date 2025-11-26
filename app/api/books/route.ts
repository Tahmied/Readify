import dbConnect from "@/lib/dbConnect"
import Book from "@/model/Book"

export async function GET() {
    try {
        await dbConnect()
        const AllBooks = await Book.find()
        return Response.json(
            { data: AllBooks }
        )
    } catch (error) {
        console.log(error)
        return Response.json(
            { error: 'error' }, { status: 503 }
        )
    }
}