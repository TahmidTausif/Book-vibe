import { useLoaderData, useParams } from "react-router-dom";
import { getReads, getWishLists, saveRead, saveWishList } from "../utils";
import toast from "react-hot-toast";

const Book = () => {
    const book = useLoaderData()
    const { bookId } = useParams()
    const bookIdInt = parseInt(bookId)
    const bookDetails = book.find(bookDetails => bookDetails.bookId === bookIdInt)
    const { bookName, author, image, rating, category,
        tags, review, totalPages, publisher, yearOfPublishing } = bookDetails

    const handleRead = read => {
        const readLists = getReads()
        const wishLists = getWishLists()
        const isExistRead = readLists.find(r=>r.bookId === read.bookId)
        const isExistwish = wishLists.find(w=>w.bookId === read.bookId)
        if(isExistRead || isExistwish){
            toast.error('You have already added this book')
        }else{
            saveRead(read)
        }
       
    }
    const handleWishList = wishList =>{
        const readLists = getReads()
        const wishLists = getWishLists()
        const isExistRead = readLists.find(r=>r.bookId === wishList.bookId)
        const isExistwish = wishLists.find(w=>w.bookId === wishList.bookId)
        if(isExistRead || isExistwish){
            toast.error('You have already added this book')
        }else{
            saveWishList(wishList)
        }
        
    }
    return (
        <div>
            <div className="card lg:card-side grid grid-cols-1 md:grid-cols-2 rounded-2xl bg-base-100 my-20">
                <div className="col-span-1 rounded-2xl">
                    <figure className="px-5 bg-gray-200 rounded-2xl py-10"><img className="w-96" src={image} alt="Album" /></figure>
                </div>
                <div className="col-span-1 card-body">
                    <h2 className="card-title text-5xl pb-5">{bookName}</h2>
                    <h3 className="font-semibold text-xl">By: {author}</h3>
                    <div className="border-t-2 border-b-2 border-gray-400 my-4 py-4">
                        <p className="font-medium">{category}</p>
                    </div>
                    <div>
                        <p><span className="font-bold">Review:</span> {review}</p>
                    </div>
                    <div className="flex mt-5">
                        <h3 className="w-10 font-bold">Tag</h3>
                        <div className="card-actions justify-around">
                            <div className="badge bg-green-100 text-green-500 text-lg p-4 font-semibold">#{tags[0]}</div>
                            <div className="badge bg-green-100 text-green-500 text-lg p-4 font-semibold">#{tags[1]}</div>
                            <div className="badge bg-green-100 text-green-500 text-lg p-4 font-semibold">#{tags[2]}</div>
                        </div>
                    </div>
                    <div className="my-4">
                        <div className="flex py-2">
                            <p className="w-20 text-gray-400 font-bold">Number of Pages:</p>
                            <p className="font-bold">{totalPages}</p>
                        </div>
                        <div className="flex py-2">
                            <p className="w-44 text-gray-400 font-bold">Publisher:</p>
                            <p className="font-bold">{publisher}</p>
                        </div>
                        <div className="flex py-2">
                            <p className="w-20 text-gray-400 font-bold">Year of Publishing:</p>
                            <p className="font-bold">{yearOfPublishing}</p>
                        </div>
                        <div className="flex py-2">
                            <p className="w-20 text-gray-400 font-bold">Rating:</p>
                            <p className="font-bold">{rating}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <button onClick={() => handleRead(bookDetails)} className="btn bg-transparent border-2 border-gray-400 font-semibold text-lg">Read</button>
                        <button onClick={() => handleWishList(bookDetails)} className="btn bg-sky-400 text-white border-2 border-sky-400 hover:bg-transparent hover:border-sky-400 hover:text-sky-400 font-semibold text-lg">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;