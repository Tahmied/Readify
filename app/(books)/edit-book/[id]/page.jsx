import dbConnect from "@/lib/dbConnect";
import Book from "@/model/Book";
import { ArrowLeft, BookOpen } from 'lucide-react';
import Form from "./Form";

const EditBook = async ({ params }) => {
  const { id } = await params
  await dbConnect()
  const book = await JSON.parse(JSON.stringify(await Book.findById(id).lean()));

  return (
    <div className="min-h-screen mt-20 bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">

        <div className="mb-8">
          <a
            href="/books"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 cursor-pointer transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Books</span>
          </a>

          <div className="flex items-center gap-3">
            <BookOpen className="text-[#eb7c1f]" size={36} />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Edit Book</h1>
              <p className="text-gray-600 mt-1">Update the details of your book</p>
            </div>
          </div>
        </div>


        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <Form book={book}></Form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;