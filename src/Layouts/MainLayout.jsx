import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";



const MainLayout = () => {
    return (
        <div className="container px-16 mx-auto">
            <Nav/>
            <Outlet/>
            
            

        </div>
    );
};

export default MainLayout;