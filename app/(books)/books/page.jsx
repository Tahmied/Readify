import dbConnect from "@/lib/dbConnect";
import Book from "@/model/Book";
import Headings from "../../../components/Utils/Headings";
import BooksFilter from "./BooksFilter.jsx";

export const metadata = {
  title: "All Book - Readify",
  description: "Browser our complete collection",
};

export const dynamic = 'force-dynamic';

const Page = async () => {
  await dbConnect();
  const booksData = await Book.find().lean();

  const books = booksData.map(book => ({
    ...book,
    _id: book._id.toString(),
    author: book.author?.toString()
  }));

  return (
    <section className='best-seller py-32'>
      <Headings
        sectionName={'Explore'}
        Title={'All Books'}
        Desc={'Browse our complete collection of books across every genre and category.'}
      />

      <BooksFilter books={books} />
    </section>
  );
};

export default Page;