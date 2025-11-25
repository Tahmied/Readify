import Image from 'next/image';

export default function Promo() {
  const promoCards = [
    {
      title: "New Release",
      bgColor: "bg-teal-500",
      buttonColor: "bg-teal-700 hover:bg-teal-800",
      imgSrc: "https://covers.openlibrary.org/b/id/8432047-L.jpg"
    },
    {
      title: "Popular",
      bgColor: "bg-blue-900",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      imgSrc: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
    },
    {
      title: "Top Rated",
      bgColor: "bg-red-400",
      buttonColor: "bg-red-500 hover:bg-red-600",
      imgSrc: "https://covers.openlibrary.org/b/id/12657287-L.jpg"
    }
  ];

  return (
    <div className="w-full flex justify-center px-4 py-8 md:py-12">
      <div className="w-full md:w-4/5 max-w-[1300px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promoCards.map((card, idx) => (
            <div
              key={idx}
              className={`${card.bgColor} rounded-2xl p-10 flex flex-col items-center justify-between relative overflow-hidden`}
            >
              <div className="mb-2">
                <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight text-center">
                  {card.title}
                </h2>
              </div>

              <div className="flex-1 flex items-center justify-center mb-8">
                <div className="relative w-48 h-64 md:w-56 md:h-72 shadow-2xl rounded-lg overflow-hidden">
                  <Image
                    src={card.imgSrc}
                    alt={card.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              <div className='cursor-pointer'>
                <button
                  className={`${card.buttonColor} text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 mx-auto cursor-pointer`}
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}