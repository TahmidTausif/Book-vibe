import { useEffect, useState } from "react";
import { getReads } from "../utils";
import Read from "../Components/Read";

const Reads = () => {
    const [reads, setReads] = useState([]);
    const [readdisplay, setReaddisplay] = useState([]);

    useEffect(() => {
        const storedReads = getReads();
        setReads(storedReads);
        setReaddisplay(storedReads);
    }, []);

    const handleDisplay = readlist => {
        let sortedReads = [];

        if (readlist === 'rating') {
            sortedReads = reads.slice().sort((a, b) => b.rating - a.rating);
        }
        else if (readlist === 'page') {
            sortedReads = reads.slice().sort((a, b) => b.totalPages - a.totalPages);
        }
        else if (readlist === 'year') {
            sortedReads = reads.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        setReaddisplay(sortedReads);
    }

    useEffect(() => {
        console.log(readdisplay);
    }, [readdisplay]);

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
                readdisplay.map((read,index) => <Read key={index} read={read}></Read>)
            }
        </div>
    );
};

export default Reads;


{/* <Read key={read.bookId} read={read}></Read> */}