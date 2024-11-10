import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="container flex flex-col justify-center">
            <div className="flex justify-center mt-10">
                <img className="max-w-[600px]" src="/undraw_Page_not_found_re_e9o6.png" alt="" />
            </div>
            <div className="flex justify-center my-5">
                <h1 className="text-4xl font-extrabold text-center">Oopss !! you`re in the wrong place mate. <br /> return home. </h1>
            </div>
            <div className="flex justify-center">

                <Link to='/' className="btn rounded-full  font-semibold text-lg bg-green-500 text-white hover:bg-green-100 hover:text-green-500 hover:border-green-500">Home</Link>
            </div>
        </div>
    );
};

export default Error;