import dbConnect from "@/lib/dbConnect";
import Book from "@/model/Book";

const page = async ({ params }) => {
    const { id } = await params

    await dbConnect()
    const book = await Book.findById(id).lean()
    
    console.log(book);
    return (
        <div>
            <h1 className="h-screen mt-32 text-black text-8xl">Dynamic Id {id}</h1>
        </div>
    );
};

export default page;