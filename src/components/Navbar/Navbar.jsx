import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const links = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
        { label: "Login", path: "/login" },
    ];

    return (
        <nav>
            <div>My App</div>
            <ul>
                {links.map((item) => (
                    <li key={item.path}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;