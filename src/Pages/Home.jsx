import { Link, useLoaderData } from "react-router-dom";
import Books from "./Books";

const Home = () => {
    const books = useLoaderData()
    return (
        <div>
            
                <div className="flex items-center justify-around gap-8 flex-col lg:flex-row-reverse bg-base-200 rounded-2xl p-8">
                    <div>
                        <img src="night-circus.png" className="max-w-48 rounded-lg " />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        <Link to='/list' className="btn text-lg font-semibold bg-green-500 text-white border-2 border-green-500 hover:bg-transparent hover:text-green-500 hover:border-green-500 mt-5">View The List</Link>
                    </div>
                </div>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto my-12">
                    {
                        books.map(book => <Books key={book.bookId} book={book}></Books>)
                    }
                </div>

        </div>
        
    );
};

export default Home;