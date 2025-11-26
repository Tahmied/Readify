
import dbConnect from "@/lib/dbConnect";
import Book from "@/model/Book";
import { BookOpen, Edit2, Eye, Plus, Trash2 } from 'lucide-react';
import { getServerSession } from "next-auth";
import Link from 'next/link';
import { authOptions } from '../../api/auth/[...nextauth]/route';

const BooksPage = async () => {
    const session = await getServerSession(authOptions)
    await dbConnect()
    const books = await Book.find({ author: session.user.id })
    return (
        <div className="min-h-screen mt-20 bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">

                <div className="mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 flex items-center gap-3">
                                <BookOpen className="text-[#eb7c1f]" size={36} />
                                My Books
                            </h1>
                            <p className="text-gray-600 mt-2">Manage your book collection</p>
                        </div>
                        <Link href={'/add-book'}>
                            <button
                                className="bg-[#eb7c1f] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d46d1a] transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                            >
                                <Plus size={20} />
                                Add New Book
                            </button>
                        </Link>

                    </div>
                </div>


                {books.length === 0 ? (
                    <div className="text-center py-16">
                        <BookOpen className="mx-auto text-gray-300 mb-4" size={64} />
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No books yet</h3>
                        <p className="text-gray-500 mb-6">Start building your library by adding your first book</p>
                        <button
                            className="bg-[#eb7c1f] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d46d1a] transition-colors duration-200 inline-flex items-center gap-2 cursor-pointer"
                        >
                            <Plus size={20} />
                            Add Your First Book
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {books.map((book) => (
                            <div
                                key={book._id}
                                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                            >

                                <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                                    <img
                                        src={book.coverImage}
                                        alt={book.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>


                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                                        {book.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                                        {book.description}
                                    </p>


                                    <div className="mb-4">
                                        <p className="text-2xl font-bold text-[#eb7c1f]">
                                            ${book.price.toFixed(2)}
                                        </p>
                                    </div>


                                    <div className="flex gap-2">
                                        <Link href={`/book/${book._id}`}>
                                            <button
                                                className="flex-1 bg-[#eb7c1f] text-white w-24 px-3 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-1.5 cursor-pointer hover:text-black"
                                                title="View Details"
                                            >
                                                <Eye size={16} />
                                                <span className="text-sm">View</span>
                                            </button>
                                        </Link>
                                        <Link href={`/edit-book/${book._id}`}>
                                            <button
                                                className="flex-1 w-24 bg-gray-100 px-3 py-2 rounded-lg font-medium hover:bg-opacity-20 transition-colors duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                                                title="Edit Book"
                                            >
                                                <Edit2 color='black' size={16}></Edit2>
                                                <span className="text-sm text-black">Edit</span>
                                            </button>
                                        </Link>

                                        <button
                                            className="bg-red-50 text-red-600 px-3 py-2 rounded-lg font-medium hover:bg-red-100 transition-colors duration-200 flex items-center justify-center cursor-pointer"
                                            title="Delete Book"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BooksPage;