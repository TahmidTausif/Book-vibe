
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const List = () => {
    const [tabIndex, setTabIndex] = useState(0)

    return (
        <div>
            <div className="py-10 bg-gray-200 rounded-2xl text-center mt-5">
                <h1 className="text-4xl font-extrabold text-black">Books</h1>
            </div>
            
            <div role="tablist" className="tabs tabs-lifted tabs-lg my-4">
                <Link to='' onClick={() => setTabIndex(0)} role="tab" className={`tab ${tabIndex === 0 ? 'tab-active text-black font-bold' : 'text-gray-400'} [--tab-border:3px]`}>Read Books</Link>
                <Link to='wishlist' onClick={() => setTabIndex(1)} role="tab" className={`tab ${tabIndex === 1 ? 'tab-active text-black font-bold' : 'text-gray-400'} [--tab-border:3px]`}>Wishlist Books</Link>
                <a role="tab" className="tab [--tab-border:3px]"></a>
            </div>
            <Outlet/>
        </div>
    );
};

export default List;