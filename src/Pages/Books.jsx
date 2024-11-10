import { Link } from "react-router-dom";


const Books = ({ book }) => {
    const { bookId, bookName, author, image, rating, category,
        tags } = book


    return (
        <Link to={`/home/${bookId}`} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="card bg-base-100 shadow-xl p-8">
                <figure className="py-5 bg-gray-200 rounded-2xl"><img className="w-40" src={image} alt={bookName} /></figure>
                <div className="card-actions pt-5 justify-around">
                    <div className="badge bg-green-100 text-green-500 text-lg p-4 font-semibold">{tags[0]}</div>
                    <div className="badge bg-green-100 text-green-500 text-lg p-4 font-semibold">{tags[1]}</div>
                    <div className="badge bg-green-100 text-green-500 text-lg p-4 font-semibold">{tags[2]}</div>
                </div>
                <div className="py-8 ">
                    <h2 className="card-title text-2xl font-bold">
                        {bookName}
                    </h2>
                    <p className="text-lg font-semibold">by: {author}</p>

                </div>
                <div className="flex flex-row justify-between">
                    <p className="text-lg font-medium">{category}</p>
                    <p className="text-lg font-medium">{rating} <i className="fa-regular fa-star"></i></p>
                </div>
            </div>
        </Link>
    );
};

export default Books;