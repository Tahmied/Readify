'use client'
import { ArrowLeft, BookOpen, Save, X } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Swal from 'sweetalert2';

const AddNewBook = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const [coverImageUrl, setCoverImageUrl] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const bookData = {
      title: formData.get('title'),
      description: formData.get('description'),
      coverImage: formData.get('coverImage'),
      pageNumber: Number(formData.get('pageNumber')),
      price: Number(formData.get('price')),
      downloadLink: formData.get('downloadLink'),
      category: formData.get('category'),
      userId: session.user.id
    };
    console.log("Sending this data:", bookData);

    try {
      const response = await fetch('/api/add-book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          title: 'Your Book Is Published',
          text: 'Find Your book in my books page',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        }).then(() => {
          router.push('/my-books');
          router.refresh();
        })
      } else {
        console.log(result.error || "Failed to add book");
      }
    } catch (error) {
      console.log(error)
    }

  }
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
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Add New Book</h1>
              <p className="text-gray-600 mt-1">Fill in the details to add a new book to your library</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 sm:p-8">

            <form onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div className="lg:col-span-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Book Cover Preview
                  </label>
                  <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center">
                    {coverImageUrl ? (
                      <img 
                        src={coverImageUrl} 
                        alt="Book cover preview" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center p-4">
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
                      value={coverImageUrl}
                      onChange={(e) => setCoverImageUrl(e.target.value)}
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
                <a
                  href="/books"
                  className="flex-1 sm:flex-initial px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <X size={20} />
                  Cancel
                </a>
                <button
                  type="submit"
                  className="flex-1 sm:flex-initial px-6 py-3 bg-[#eb7c1f] text-white rounded-lg font-medium hover:bg-[#d46d1a] transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Save size={20} />
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewBook;