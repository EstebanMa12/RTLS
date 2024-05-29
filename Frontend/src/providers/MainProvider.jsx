/* eslint-disable no-unused-vars */
import { createContext } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";

export const MainContext = createContext(null);

const MainProvider =()=>{
    return(
        <MainContext.Provider value={null}>
            <Outlet />
            <Footer />
        </MainContext.Provider>
    )

}

export default MainProvider;