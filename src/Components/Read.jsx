import { Link } from "react-router-dom";

const Read = (read) => {
    const { bookId, bookName, author, image, rating, category,
        tags, totalPages, publisher, yearOfPublishing } = read.read
    console.log(read)
    return (
        <div className="card border-2 border-gray-200 p-4 rounded-2xl lg:card-side grid grid-cols-1 md:grid-cols-3 bg-base-100 my-20">
            <div className="col-span-1 rounded-2xl">
                <figure className="px-5 bg-gray-200 rounded-2xl py-5"><img className="w-40" src={image} alt="Album" /></figure>
            </div>
            <div className="col-span-1 md:col-span-2 card-body pt-4 py-0">
                <h2 className="card-title text-5xl pb-5">{bookName}</h2>
                <h3 className="font-semibold text-xl">By: {author}</h3>

                <div className="flex mt-5 items-center">
                    <h3 className="w-10 font-bold">Tag</h3>
                    <div className="card-actions justify-around">
                        <div className="badge bg-green-100 text-green-500 text-lg p-4 font-semibold">#{tags[0]}</div>
                        <div className="badge bg-green-100 text-green-500 text-lg p-4 font-semibold">#{tags[1]}</div>
                        <div className="badge bg-green-100 text-green-500 text-lg p-4 font-semibold">#{tags[2]}</div>
                    </div>
                    <div className="flex pl-5 items-center gap-2">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="  font-bold">Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="flex flex-row gap-10 my-4">
                    <div className="flex items-center gap-2 py-2">
                        <i className="fa-solid fa-user-group text-gray-400"></i>
                        <p className="font-medium text-gray-400">Publisher: {publisher}</p>
                    </div>
                    <div className="flex items-center gap-2 py-2">
                        <i className="fa-regular fa-file-lines text-gray-400"></i>
                        <p className="font-medium text-gray-400">Page {totalPages}</p>
                    </div>
                </div>
                <div className="card-actions border-t-2 pt-5 border-gray-400 justify-start items-center">
                    <div className="badge  py-6 px-4 bg-sky-100">
                        <p className="font-semibold text-lg text-sky-500">category: {category}</p>
                    </div>
                    <div className="badge py-6 px-4 bg-orange-100">
                        <p className="font-semibold text-lg text-orange-500">rating: {rating}</p>
                    </div>
                    <Link to={`/home/${bookId}`} className="btn rounded-full  font-semibold text-lg bg-green-500 text-white hover:bg-green-100 hover:text-green-500 hover:border-green-500">View Details</Link>

                </div>
            </div>
        </div>
    );
};

export default Read;