import { ShoppingCart, Star } from 'lucide-react';

const SliderCard = ({ bookname, author, price, img, id, rating }) => {
    return (
        <div className="px-3">
            <div className=" cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">

                <div className="relative overflow-hidden bg-gray-100 flex items-center justify-center p-4" style={{ height: '320px' }}>
                    <img
                        src={img}
                        alt={bookname}
                        className=" object-cover transition-transform duration-500 group-hover:scale-105"
                    />


                    <button
                        className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                        style={{ color: '#eb7c1f' }}
                    >
                        <ShoppingCart size={20} />
                    </button>
                </div>

                <div className="p-5 flex flex-col flex-grow">

                    <h3 className="font-bold text-lg text-gray-800 -mb-6 line-clamp-2 min-h-[3.5rem] group-hover:text-[#eb7c1f] transition-colors duration-300">
                        {bookname}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3">
                        by <span className="font-medium">{author}</span>
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    size={16}
                                    className={index < Math.floor(rating) ? 'fill-[#eb7c1f] text-[#eb7c1f]' : 'text-gray-300'}
                                />
                            ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-700">
                            {rating.toFixed(1)}
                        </span>
                    </div>

                    <div className="mt-auto flex flex-col sm:flex-row items-center justify-between pt-3 border-t border-gray-200">

                        <div className="flex flex-col">
                            <span className="text-2xl font-bold" style={{ color: '#eb7c1f' }}>
                                ${price.toFixed(2)}
                            </span>
                        </div>

                        <button
                            className="px-5 py-2.5 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            style={{ backgroundColor: '#eb7c1f' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#d46d1a';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#eb7c1f';
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderCard;