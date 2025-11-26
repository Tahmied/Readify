'use client'
import { Save, Upload, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { updateBook } from './actions';

const Form = ({ book }) => {
    const router = useRouter()
    async function handleSubmit(formData) {
        await updateBook(book._id, formData)
        Swal.fire({
            title: 'Your Edits Has Been Saved',
            text: 'Find Your book in my books page',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000
        }).then(() => {
            router.push('/my-books');
            router.refresh();
        })
    }

    return (
        <form action={handleSubmit}>
            <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Book Cover Preview
                        </label>
                        <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center">
                            {book.coverImage ? (
                                <img
                                    src={book.coverImage}
                                    alt={book.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="text-center p-4">
                                    <Upload className="mx-auto text-gray-400 mb-2" size={40} />
                                    <p className="text-sm text-gray-500">Preview will appear here</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-6">

                        <div>
                            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                                Book Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                required
                                defaultValue={book.title}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eb7c1f] focus:border-transparent outline-none transition-all"
                                placeholder="Enter book title"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                required
                                rows="4"
                                defaultValue={book.description}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eb7c1f] focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Enter book description"
                            />
                        </div>


                        <div>
                            <label htmlFor="coverImage" className="block text-sm font-semibold text-gray-700 mb-2">
                                Cover Image URL <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="url"
                                id="coverImage"
                                name="coverImage"
                                required
                                defaultValue={book.coverImage}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eb7c1f] focus:border-transparent outline-none transition-all"
                                placeholder="https://example.com/book-cover.jpg"
                            />
                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="pageNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Page Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    id="pageNumber"
                                    name="pageNumber"
                                    required
                                    defaultValue={book.pageNumber}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eb7c1f] focus:border-transparent outline-none transition-all"
                                    placeholder="320"
                                    min="1"
                                />
                            </div>

                            <div>
                                <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Price ($) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    required
                                    step="0.01"
                                    defaultValue={book.price}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eb7c1f] focus:border-transparent outline-none transition-all"
                                    placeholder="29.99"
                                    min="0"
                                />
                            </div>
                        </div>


                        <div>
                            <label htmlFor="downloadLink" className="block text-sm font-semibold text-gray-700 mb-2">
                                Download Link <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="downloadLink"
                                name="downloadLink"
                                required
                                defaultValue={book.downloadLink}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eb7c1f] focus:border-transparent outline-none transition-all"
                                placeholder="drive.google.com/file/..."
                            />
                        </div>

                        <div>
                            <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                                Category <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="category"
                                name="category"
                                required
                                defaultValue={book.category}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eb7c1f] focus:border-transparent outline-none transition-all cursor-pointer bg-white"
                            >
                                <option value="">Select a category</option>
                                <option value="self improvement">Self Improvement</option>
                                <option value="fiction">Fiction</option>
                                <option value="non-fiction">Non-Fiction</option>
                                <option value="business">Business</option>
                                <option value="technology">Technology</option>
                                <option value="science">Science</option>
                                <option value="history">History</option>
                                <option value="biography">Biography</option>
                                <option value="philosophy">Philosophy</option>
                                <option value="psychology">Psychology</option>
                                <option value="design">Design</option>
                                <option value="productivity">Productivity</option>
                                <option value="health & fitness">Health & Fitness</option>
                                <option value="cooking">Cooking</option>
                                <option value="travel">Travel</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
                    <Link
                        href="/my-books"
                        className="flex-1 sm:flex-initial px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <X size={20} />
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        className="flex-1 sm:flex-initial px-6 py-3 bg-[#eb7c1f] text-white rounded-lg font-medium hover:bg-[#d46d1a] transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                    >
                        <Save size={20} />
                        Save Changes
                    </button>
                </div>
            </div>
        </form>
    );
};
export default Form;