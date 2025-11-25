'use client'

import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Ctabtn from '../Utils/Ctabtn';
import SliderCard from "../Utils/SliderCard";


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
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a07",
        "thumbnail": "https://covers.openlibrary.org/b/id/8231856-L.jpg",
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "description": "A story about teenage angst and alienation narrated by the iconic character Holden Caulfield.",
        "price": 10.0,
        "rating": 3.7
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a08",
        "thumbnail": "https://covers.openlibrary.org/b/id/12556702-L.jpg",
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "description": "A fable about following your dream, listening to your heart, and reading the omens strewn along life's path.",
        "price": 13.99,
        "rating": 3.6
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a09",
        "thumbnail": "https://covers.openlibrary.org/b/id/14441027-L.jpg",
        "title": "Atomic Habits",
        "author": "James Clear",
        "description": "An easy and proven way to build good habits and break bad ones using small changes.",
        "price": 16.0,
        "rating": 3.7
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a10",
        "thumbnail": "https://covers.openlibrary.org/b/id/12627830-L.jpg",
        "title": "Clean Code",
        "author": "Robert C. Martin",
        "description": "A handbook of agile software craftsmanship that challenges you to read code and think about what's right about it.",
        "price": 42.5,
        "rating": 3.9
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a11",
        "thumbnail": "https://covers.openlibrary.org/b/id/8376059-L.jpg",
        "title": "Dune",
        "author": "Frank Herbert",
        "description": "Set on the desert planet Arrakis, it is the story of the boy Paul Atreides, heir to a noble family.",
        "price": 15.99,
        "rating": 4.2
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a12",
        "thumbnail": "https://covers.openlibrary.org/b/id/8762368-L.jpg",
        "title": "Sapiens: A Brief History of Humankind",
        "author": "Yuval Noah Harari",
        "description": "A narrative of humanity's creation and evolution that explores the ways in which biology and history have defined us.",
        "price": 18.99,
        "rating": 4.3
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a13",
        "thumbnail": "https://covers.openlibrary.org/b/id/10602783-L.jpg",
        "title": "The Da Vinci Code",
        "author": "Dan Brown",
        "description": "A mystery thriller novel that explores an alternative religious history.",
        "price": 9.99,
        "rating": 4.8
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a14",
        "thumbnail": "https://covers.openlibrary.org/b/id/7886050-L.jpg",
        "title": "Thinking, Fast and Slow",
        "author": "Daniel Kahneman",
        "description": "The famous psychologist explains the two systems that drive the way we think.",
        "price": 14.5,
        "rating": 3.7
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a15",
        "thumbnail": "https://covers.openlibrary.org/b/id/6419845-L.jpg",
        "title": "Steve Jobs",
        "author": "Walter Isaacson",
        "description": "The exclusive biography of Steve Jobs, based on more than forty interviews with Jobs himself.",
        "price": 20.0,
        "rating": 4.3
    }
]
const Recomended = () => {

    return (
        <section className='best-seller'>
            <p className="heading text-4xl font-bold text-center mt-12 mb-8 text-black">Recomended For You</p>

            <div className="best-books-container max-w-[1300px] mx-auto gap-8 -mb-5 relative px-8">

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={3}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    autoplay={{
                        delay: 2500, 
                        disableOnInteraction: true, 
                    }}
                    loop={true}
                >
                    {books.map((book) => (
                        <SwiperSlide key={book._id}>
                            <SliderCard
                                bookname={book.title}
                                author={book.author}
                                price={book.price}
                                img={book.thumbnail}
                                id={book._id}
                                rating={book.rating}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>



            </div>
            <div className="cta-container-slider mt-8">
                <Ctabtn text={'All Books'} link={'/books'}></Ctabtn>
            </div>

        </section>
    );
};

export default Recomended;