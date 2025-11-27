'use server'
import dbConnect from "@/lib/dbConnect";
import Book from "@/model/Book";
import { revalidatePath } from "next/cache";

export async function deleteBook(id) {
    try {
        await dbConnect();
        await Book.findByIdAndDelete(id);
        revalidatePath('/my-books'); 
        return { success: true };
    } catch (error) {
        console.error("Delete failed:", error);
        return { success: false, error: "Failed to delete book" };
    }
}