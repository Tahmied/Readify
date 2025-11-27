import Image from 'next/image';
import Link from 'next/link';

export default function Promo() {
  const promoCards = [
    {
      title: "New Release",
      bgColor: "bg-teal-500",
      buttonColor: "bg-teal-700 hover:bg-teal-800",
      imgSrc: "https://res.cloudinary.com/dzkdemrec/image/upload/v1764204287/in_the_fog_gh0tn0.jpg",
      link: '/book/69279f18bf04329737faec68'
    },
    {
      title: "Popular",
      bgColor: "bg-blue-900",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      imgSrc: "https://res.cloudinary.com/dzkdemrec/image/upload/v1764204137/eye_pburnk.jpg",
      link: '/book/69279e8fbf04329737faec62'
    },
    {
      title: "Top Rated",
      bgColor: "bg-red-400",
      buttonColor: "bg-red-500 hover:bg-red-600",
      imgSrc: "https://res.cloudinary.com/dzkdemrec/image/upload/v1764203938/the_sentient_code_pdmrcz.jpg",
      link: '/book/69279db5bf04329737faec50'
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
                  />
                </div>
              </div>

              <div className='cursor-pointer'>
                <Link href={card.link}>
                  <button
                    className={`${card.buttonColor} text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 mx-auto cursor-pointer`}
                  >
                    Shop Now
                  </button>
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}