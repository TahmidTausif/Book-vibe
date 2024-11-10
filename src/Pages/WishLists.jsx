import WishList from "../Components/WishList";
import { useEffect, useState } from "react";
import { getWishLists } from "../utils";

const WishLists = () => {
    const [wishLists, setWishLists] = useState([]);
    const [wishDisplay, setWishDisplay] = useState([]);

    const handleDisplay = wishlist => {
        let sortedWishLists = [];

        if (wishlist === 'rating') {
            sortedWishLists = wishLists.slice().sort((a, b) => b.rating - a.rating);
        } else if (wishlist === 'page') {
            sortedWishLists = wishLists.slice().sort((a, b) => b.totalPages - a.totalPages);
        } else if (wishlist === 'year') {
            sortedWishLists = wishLists.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        setWishDisplay(sortedWishLists);
    }

    useEffect(() => {
        const storedWishLists = getWishLists();
        setWishLists(storedWishLists);
        setWishDisplay(storedWishLists);
    }, []);

    useEffect(() => {
        console.log(wishDisplay);
    }, [wishDisplay]);

    return (
        <div>
            <div className="flex justify-center my-10">
                <details className="dropdown">
                    <summary className="m-1 bg-green-500 hover:bg-green-500 btn w-52 text-white text-lg font-semibold">Sort
                        <i className="fa-solid fa-chevron-down"></i>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleDisplay('rating')}><a>Rating</a></li>
                        <li onClick={() => handleDisplay('page')}><a>Number of Pages</a></li>
                        <li onClick={() => handleDisplay('year')}><a>publishing year</a></li>
                    </ul>
                </details>
            </div>
            {
                wishDisplay.map(wishList => <WishList key={wishList.bookId} wishList={wishList}></WishList>)
            }
        </div>
    );
};

export default WishLists;
