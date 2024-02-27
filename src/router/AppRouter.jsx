/* eslint-disable no-unused-vars */
import {  Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { useState } from "react";
import SidebarComponent from "../components/SidebarComponent";



function AppRouter() {
  const [isSideBar, setIsSidebar] = useState(true);
  return (

      <div className="app">
        <SidebarComponent isSideBar={isSideBar} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
  );
}

export default AppRouter;