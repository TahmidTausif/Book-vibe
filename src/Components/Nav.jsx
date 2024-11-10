import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar bg-base-100 pt-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="text-xl font-bold"><NavLink to='/' className={({ isActive }) => isActive ? 'text-green-500' : ''}>Home</NavLink></li>
                        <li className="text-xl font-bold"><NavLink to='/list' className={({ isActive }) => isActive ? 'text-green-500' : ''}>Listed Books</NavLink></li>
                        <li className="text-xl font-bold"><NavLink to='/page' className={({ isActive }) => isActive ? 'text-green-500' : ''}>Pages to Read</NavLink></li>
                    </ul>
                </div>
                <NavLink to='/' className="btn btn-ghost text-2xl font-extrabold">Book <span className="text-green-500">Vibe</span></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-xl font-bold"><NavLink to='/' className={({ isActive }) => isActive ? 'text-green-500' : ''}>Home</NavLink></li>
                    <li className="text-xl font-bold"><NavLink to='/list' className={({ isActive }) => isActive ? 'text-green-500' : ''}>Listed Books</NavLink></li>
                    <li className="text-xl font-bold"><NavLink to='/page' className={({ isActive }) => isActive ? 'text-green-500' : ''}>Pages to Read</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <a className="btn hidden md:display bg-green-500 text-white border-2 border-green-500 hover:bg-transparent hover:border-green-500 hover:text-green-500">Sign In</a>
                <a className="btn  hidden md:display bg-sky-300 text-white border-2 border-sky-300 hover:bg-transparent hover:border-sky-300 hover:text-sky-300">Sign Out</a>
            </div>
        </div>
    );
};

export default Nav;