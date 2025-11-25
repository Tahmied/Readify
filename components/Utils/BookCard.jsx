import Link from 'next/link';

const BookCard = ({ 
  bookname, 
  author, 
  price, 
  originalPrice, 
  id, 
  img, 
  rating = 4 
}) => {
 
  const renderStars = () => {
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
          className="w-3.5 h-3.5 sm:w-4 sm:h-4"
        >
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-3.5 h-3.5 sm:w-4 sm:h-4">
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
          className="w-3.5 h-3.5 sm:w-4 sm:h-4"
        >
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <div className="w-full h-full group cursor-pointer transition-all duration-300 hover:translate-y-[-3px]">
      <div className="flex flex-col sm:flex-row bg-white rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 sm:p-5 h-full transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="w-full sm:w-32 md:w-36 lg:w-40 flex-shrink-0 relative z-10 transition-transform duration-300 group-hover:-translate-y-2 mb-4 sm:mb-0">
          <img 
            src={img} 
            alt={bookname} 
            className="w-full rounded-lg shadow-2xl object-cover aspect-[2/3]" 
          />
        </div>
        <div className="flex flex-col flex-grow sm:pl-4 md:pl-5 lg:pl-6 sm:pr-2 justify-between">
          <div className="flex-grow">
            <h3 className="text-slate-900 font-bold text-lg sm:text-xl leading-tight mb-1 line-clamp-2">
              {bookname}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mb-2 sm:mb-3 font-medium line-clamp-1">
              By {author}
            </p>
            <div className="flex items-center gap-1 mb-3 sm:mb-4">
              {renderStars()}
              <span className="text-slate-600 text-xs sm:text-sm ml-1 font-medium">
                ({rating})
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="text-slate-900 font-bold text-xl sm:text-2xl">
                ${price}
              </span>
              {originalPrice && (
                <span className="text-slate-400 font-medium text-base sm:text-lg line-through decoration-slate-400">
                  ${originalPrice}
                </span>
              )}
            </div>
          </div>
          <Link href={`/book/${id}`} className="cursor-pointer w-full mt-auto">
            <button className="w-full cursor-pointer border border-[#eb7c1f] text-[#eb7c1f] bg-[#fff6ea] hover:bg-[#eb7c1f] hover:text-white font-semibold py-2.5 sm:py-3 rounded-xl transition-all duration-300 active:scale-95 shadow-sm text-sm sm:text-base">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;