import { Link } from 'react-router-dom';
import "./Navbar.style.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-left">
                <Link to="/" className='nav-link'>Home</Link>
            </div>
            <div className="nav-right">
                <Link to="/about" className="nav-link">About</Link>
                {/* Add more navigation links as needed */}
            </div>
        </div>
    );
}

export default Navbar;
