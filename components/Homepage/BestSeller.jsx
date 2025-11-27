import dbConnect from "@/lib/dbConnect";
import Book from "@/model/Book";
import BookCard from "../Utils/BookCard";
import Ctabtn from '../Utils/Ctabtn';
import Headings from "../Utils/Headings";



const BestSeller = async () => {

    await dbConnect()
    const AllBooks = await Book.find().lean()
    const books = AllBooks.slice(0, 6);
    return (
        <section className='best-seller'>
            <Headings sectionName={'Top Picks'} Title={'Our Best Selling Books'} Desc={'Discover the books everyone is reading right now'}></Headings>
            <div className="best-books-container -mt-16 max-w-[1300px] mx-auto gap-8 -mb-5">
                <div className="grid grid-cols-1 max-[425px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 mx-auto max-w-7xl max-[1190px]:grid-cols-2">

                    {books.map((book) => (
                        <BookCard
                            key={book._id}
                            bookname={book.title}
                            author={book.authorName}
                            price={book.price}
                            img={book.coverImage}
                            id={book._id}
                            rating={book.avgRating}
                        />
                    ))}
                </div>
            </div>
            <Ctabtn text={'All Books'} link={'/books'}></Ctabtn>
        </section>
    );
};

export default BestSeller;