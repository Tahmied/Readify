import BookCard from "../Utils/BookCard";
import Ctabtn from '../Utils/Ctabtn';
import Headings from "../Utils/Headings";



const BestSeller = () => {
const books = [
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a01",
        "thumbnail": "https://covers.openlibrary.org/b/id/8432047-L.jpg",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "description": "A classic tale of the Jazz Age, exploring themes of wealth, love, and the American Dream.",
        "price": 10.99,
        "rating": 3.6
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a02",
        "thumbnail": "https://covers.openlibrary.org/b/id/7222246-L.jpg",
        "title": "1984",
        "author": "George Orwell",
        "description": "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
        "price": 8.99,
        "rating": 4.9
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a03",
        "thumbnail": "https://covers.openlibrary.org/b/id/12657287-L.jpg",
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "description": "A powerful story of racial injustice and childhood innocence in the American South.",
        "price": 12.5,
        "rating": 4.9
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a04",
        "thumbnail": "https://covers.openlibrary.org/b/id/10523481-L.jpg",
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "description": "A fantasy novel about the adventures of Bilbo Baggins, a hobbit who journeys to win a share of dragon gold.",
        "price": 14.95,
        "rating": 3.6
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a05",
        "thumbnail": "https://covers.openlibrary.org/b/id/10580430-L.jpg",
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "description": "The first novel in the Harry Potter series and J.K. Rowling's debut novel, introducing the boy wizard.",
        "price": 11.99,
        "rating": 4.0
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a06",
        "thumbnail": "https://covers.openlibrary.org/b/id/8259443-L.jpg",
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "description": "A romantic novel of manners that depicts the British gentry of the early 19th century.",
        "price": 9.5,
        "rating": 4.9
    }
]
    return (
        <section className='best-seller'>
            <Headings sectionName={'Top Picks'} Title={'Our Best Selling Books'} Desc={'Discover the books everyone is reading right now'}></Headings>
            <div className="best-books-container -mt-16 max-w-[1300px] mx-auto gap-8 -mb-5">
                <div className="grid grid-cols-1 max-[425px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 mx-auto max-w-7xl max-[1190px]:grid-cols-2">

                    {books.map((book) => (
                        <BookCard
                            key={book._id}
                            bookname={book.title}
                            author={book.author}
                            price={book.price}
                            img={book.thumbnail}
                            id={book._id}
                            rating={book.rating}
                        />
                    ))}
                </div>
            </div>
            <Ctabtn text={'All Books'} link={'/books'}></Ctabtn>
        </section>
    );
};

export default BestSeller;