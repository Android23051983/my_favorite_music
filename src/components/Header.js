import logo from "../images/15762.jpg";
// import Socialicons from "./Socialicons";
// import Menu from "./Menu";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
    <nav class="navbar navbar-expand-lg py-2 sticky-top border-bottom border-2">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <img src={logo} alt="logo" width="50px" />
        <div className="w-50 d-flex justify-content-around">
        <NavLink
                className={
                    ({isActive}) => (
                    isActive
                        ? "nav-link text-dark fw-bold"
                        : "nav-link text-dark"
                )}
                to="/"
            >
                HOME
            </NavLink>
            <NavLink
                className={
                    ({isActive}) => (
                    isActive
                        ? "nav-link text-dark fw-bold"
                        : "nav-link text-dark"
                )}
                to="/gallery"
            >
                GALLERY
            </NavLink>
            <NavLink
                className={
                    ({isActive}) => (
                    isActive
                        ? "nav-link text-dark fw-bold"
                        : "nav-link text-dark"
                )}
                to="/about"
            >
                ABOUT
            </NavLink>
            </div>
        </div>
    </nav>
    )
}


export default Header;