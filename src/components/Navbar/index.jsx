/* eslint-disable no-unused-vars */
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="
            flex
            justify-between
            items-center
            border
            w-full
            h-16
            px-10
            ">
            <Link to="/">
                <h1 className="text-3xl font-bold hover:text-orange-500"> SISTEMA RTLS</h1>
            </Link>
            <ul className="
            flex
            justify-between
            items-center
            w-1/2
            h-full
            
            ">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/register">Registrar Equipo</Link>
                </li>
            </ul>
            </nav>
        </div>
    );
    }
    export default Navbar;