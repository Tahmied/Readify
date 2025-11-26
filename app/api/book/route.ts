import dbConnect from "@/lib/dbConnect"
import Book from "@/model/Book"
import User from "@/model/User"

function generateBookStats() {
    const steps = [0, 0.5]
    const base = Math.floor(Math.random() * 5) + 1
    const decimal = steps[Math.floor(Math.random() * steps.length)]
    const avgRating = Math.min(base + decimal, 5)
    const downloadCount = Math.floor(Math.random() * (10000 - 100 + 1)) + 100;
    return {
        avgRating,
        downloadCount
    };
}


export async function POST(req: Request) {
    try {
        await dbConnect()
        const { title, description, coverImage, userId, pageNumber, price, downloadLink, category } = await req.json()

        if ([title, description, coverImage, price, downloadLink, category, pageNumber, userId].some((e) => !e)) {
            throw new Error("These are required fields");
        }

        const writter = await User.findById(userId)
        if (!writter) {
            throw new Error('No user found')
        }
        const { avgRating, downloadCount } = generateBookStats()

        const book = await Book.create({
            title: title,
            description: description,
            coverImage: coverImage,
            author: writter,
            pageNumber: pageNumber,
            price: price,
            downloadLink: downloadLink,
            category: category,
            avgRating: avgRating,
            downloadCount: downloadCount,
            status: 'published'
        })

        return Response.json(
            { status: 200, data: book }
        )

    } catch (error) {
        console.log(error)
        return Response.json(
            { error: 'error' }, { status: 503 }
        )
    }
}