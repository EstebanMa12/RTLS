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
                <h1 className="text-3xl font-bold hover:text-orange-500"> SISTEMA TLS</h1>
            </Link>
            </nav>
        </div>
    );
    }
    export default Navbar;