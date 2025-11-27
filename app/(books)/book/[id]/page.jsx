import dbConnect from "@/lib/dbConnect";
import Book from "@/model/Book";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;

  await dbConnect();
  const book = await Book.findById(id).lean();

  if (!book) {
    return {
      title: "Book Not Found",
      description: "The requested book could not be found."
    };
  }

  return {
    title: book.title,
    description: book.description.substring(0, 160),
    openGraph: {
      images: [book.coverImage],
    },
  };
}

const page = async ({ params }) => {
  const { id } = await params;

  await dbConnect();
  const book = await Book.findById(id).lean();
  console.log(book);

  if (!book) {
    notFound();
  }
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#f59e0b"
          className="w-5 h-5"
        >
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-5 h-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#e2e8f0"
            className="absolute inset-0 w-full h-full"
          >
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#f59e0b"
            className="absolute inset-0 w-full h-full"
            style={{ clipPath: 'inset(0 50% 0 0)' }}
          >
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
        </div>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#e2e8f0"
          className="w-5 h-5"
        >
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-b from-orange-50/30 to-white py-8 sm:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-[#eb7c1f] transition-colors duration-300 mb-6 sm:mb-8 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <span className="font-medium text-sm sm:text-base">Back to Store</span>
        </Link>

        <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 lg:p-10">

            <div className="flex justify-center lg:justify-end">
              <div className="relative group w-full max-w-sm">
                <div className="absolute border-2 border-[#eb7c1f] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full rounded-xl shadow-2xl object-cover aspect-[2/3]"
                  />
                  <div className="absolute top-3 right-3 bg-[#eb7c1f] text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    ${book.price}
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-col justify-center space-y-4 sm:space-y-6">

              <div className="inline-flex items-center gap-2 w-fit">
                <span className="bg-orange-100 text-[#eb7c1f] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide">
                  {book.category}
                </span>
              </div>

              <h1 className="text-slate-900 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                {book.title}
              </h1>

              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={book.authorImg}
                  alt={book.authorName}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-orange-200 shadow-md"
                />
                <div>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium">Written by</p>
                  <p className="text-slate-900 font-semibold text-base sm:text-lg">{book.authorName}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {renderStars(book.avgRating)}
                </div>
                <span className="text-slate-700 font-bold text-base sm:text-lg">
                  {book.avgRating}
                </span>
                <span className="text-slate-500 text-sm sm:text-base">
                  / 5.0
                </span>
              </div>

              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                {book.description}
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 py-4 sm:py-6 border-t border-b border-slate-200">
                <div className="text-center sm:text-left">
                  <p className="text-slate-500 text-xs sm:text-sm font-medium mb-1">Pages</p>
                  <p className="text-slate-900 text-lg sm:text-xl lg:text-2xl font-bold">{book.pageNumber}</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-slate-500 text-xs sm:text-sm font-medium mb-1">Downloads</p>
                  <p className="text-slate-900 text-lg sm:text-xl lg:text-2xl font-bold">{book.downloadCount.toLocaleString()}</p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 pt-2">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-slate-900 font-bold text-3xl sm:text-4xl lg:text-5xl">
                    ${book.price}
                  </span>
                  <span className="text-slate-500 text-sm sm:text-base">USD</span>
                </div>

                <Link href={book.downloadLink}>
                  <button className="cursor-pointer w-full bg-[#eb7c1f] hover:bg-[#d16d18] text-white font-bold py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl text-base sm:text-lg lg:text-xl">
                    Read Now
                  </button>
                </Link>


                <p className="text-slate-500 text-xs sm:text-sm text-center">
                  Instant download after purchase • Published {formatDate(book.createdAt)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 bg-white rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-4 sm:p-6 lg:p-8">
          <h2 className="text-slate-900 font-bold text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6">
            Book Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-orange-100 p-2 sm:p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#eb7c1f" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <p className="text-slate-500 text-xs sm:text-sm font-medium mb-1">Total Pages</p>
                <p className="text-slate-900 text-base sm:text-lg font-semibold">{book.pageNumber} pages</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-orange-100 p-2 sm:p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#eb7c1f" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-500 text-xs sm:text-sm font-medium mb-1">Category</p>
                <p className="text-slate-900 text-base sm:text-lg font-semibold capitalize">{book.category}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-orange-100 p-2 sm:p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#eb7c1f" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
              <div>
                <p className="text-slate-500 text-xs sm:text-sm font-medium mb-1">Downloads</p>
                <p className="text-slate-900 text-base sm:text-lg font-semibold">{book.downloadCount.toLocaleString()} times</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-orange-100 p-2 sm:p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#eb7c1f" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div>
                <p className="text-slate-500 text-xs sm:text-sm font-medium mb-1">Published</p>
                <p className="text-slate-900 text-base sm:text-lg font-semibold">{formatDate(book.createdAt)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;