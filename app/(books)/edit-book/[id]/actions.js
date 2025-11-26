"use server";

import dbConnect from "@/lib/dbConnect";
import Book from "@/model/Book";

export async function updateBook(id, formData) {
    await dbConnect();

    const bookData = {
        title: formData.get("title"),
        description: formData.get("description"),
        coverImage: formData.get("coverImage"),
        pageNumber: Number(formData.get("pageNumber")),
        price: Number(formData.get("price")),
        downloadLink: formData.get("downloadLink"),
        category: formData.get("category"),
    };

    await Book.findByIdAndUpdate(id, bookData, { new: true });

    return { success: true };
}
