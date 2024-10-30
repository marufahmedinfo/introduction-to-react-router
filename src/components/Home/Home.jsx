import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";



const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === "loading" ? 
                <div>Loading...</div> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;