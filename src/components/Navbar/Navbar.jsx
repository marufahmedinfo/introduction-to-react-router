import { NavLink } from 'react-router-dom';
import './Navbar.css'
import '../User/User.css'
const Navbar = () => {
    return (
            
        <div className='flex'>
            <h4>Maruf</h4>
            <nav className="flex">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">Our Users</NavLink>
                <NavLink to="/posts">AllPosts</NavLink>
                <NavLink to="/feture">feture</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </nav>
        </div>
            
    );
};

export default Navbar;