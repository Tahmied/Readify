import dbConnect from "@/lib/dbConnect"
import Book from "@/model/Book"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import { authOptions } from "../auth/[...nextauth]/route"

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

        const session = await getServerSession(authOptions);
        if (!session || !session.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const userId = session.user.id;

        const { title, description, coverImage, pageNumber, price, downloadLink, category } = await req.json()

        if ([title, description, coverImage, price, downloadLink, category, pageNumber].some((e) => !e)) {
            throw new Error("These are required fields");
        }

        const { avgRating, downloadCount } = generateBookStats()

        const book = await Book.create({
            title: title,
            description: description,
            coverImage: coverImage,
            author: userId,
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