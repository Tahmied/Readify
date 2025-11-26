import dbConnect from "@/lib/dbConnect";
import Book from "@/model/Book";
import BookCard from "../../../components/Utils/BookCard";
import Headings from "../../../components/Utils/Headings";

const Page = async () => {
    await dbConnect()
    const books = await Book.find()
    console.log(books);
    return (
        <section className='best-seller py-32'>
            <Headings sectionName={'Explore'} Title={'All Books'} Desc={'Browse our complete collection of books across every genre and category.'}></Headings>
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
        </section>
    );
};

export default Page;