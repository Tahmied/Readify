import Marquee from 'react-fast-marquee';
import Author from '../Utils/Author';
import Headings from '../Utils/Headings';

const allAuthors = [
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a16",
        "name": "J.K. Rowling",
        "image": "https://covers.openlibrary.org/a/olid/OL23919A-L.jpg"
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a17",
        "name": "Stephen King",
        "image": "https://covers.openlibrary.org/a/olid/OL19981A-L.jpg"
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a18",
        "name": "J.R.R. Tolkien",
        "image": "https://covers.openlibrary.org/a/olid/OL26320A-L.jpg"
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a19",
        "name": "George R.R. Martin",
        "image": "https://covers.openlibrary.org/a/olid/OL234664A-L.jpg"
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a20",
        "name": "Neil Gaiman",
        "image": "https://covers.openlibrary.org/a/olid/OL53305A-L.jpg"
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a21",
        "name": "Margaret Atwood",
        "image": "https://covers.openlibrary.org/a/olid/OL24338A-L.jpg"
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a22",
        "name": "Dan Brown",
        "image": "https://covers.openlibrary.org/a/olid/OL26226A-L.jpg"
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a23",
        "name": "Paulo Coelho",
        "image": "https://covers.openlibrary.org/a/olid/OL6581A-L.jpg"
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a24",
        "name": "Mark Twain",
        "image": "https://covers.openlibrary.org/a/olid/OL18376A-L.jpg"
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a25",
        "name": "Charles Dickens",
        "image": "https://covers.openlibrary.org/a/olid/OL24638A-L.jpg"
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a26",
        "name": "Jane Austen",
        "image": "https://covers.openlibrary.org/a/olid/OL21594A-L.jpg"
    },
    {
        "_id": "642a1b3f9c1d4a0b8e7f1a27",
        "name": "Ernest Hemingway",
        "image": "https://covers.openlibrary.org/a/olid/OL13640A-L.jpg"
    }
]

const Authors = () => {
    return (
        <div>
            <Headings sectionName={'Readers\' Choice'} Title={'Featured Author'} Desc={'Selected for their inspiring work and impact on readers'}></Headings>
            <Marquee style={{width: '80%', margin: '0 auto'}}>
                <Author name={'Tahmied'} img={'https://res.cloudinary.com/dzkdemrec/image/upload/v1763371043/professional_image_wq1uy5.jpg'}></Author>
                {
                    allAuthors.map((author)=>{
                        return <Author key={author._id} name={author.name} img={author.image}></Author>
                    })
                }
            </Marquee>
        </div>
    );
};

export default Authors;