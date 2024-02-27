/* eslint-disable no-unused-vars */
import {Sidebar, Menu, MenuItem, SubMenu, useProSidebar} from 'react-pro-sidebar';
import {Link} from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {  Route, Routes } from "react-router-dom";
import Home from '../../pages/Home';

const SidebarComponent = () => {
    const { collapseSidebar } = useProSidebar();
    return (
        <div>
            <Sidebar style={{ height: "100vh"}}>
            <Menu iconShape="square">
                <MenuItem
                    icon={<MenuOutlinedIcon/>}
                    onClick={() => {
                        console.log("click");
                        collapseSidebar();
                    }}
                    style = {{cursor: "pointer", textAlign: "center"}}
                >
                    {" "}
                    <h2 className="
                    text-2xl
                    font-bold
                    text-center
                    ">Actions</h2>
                </MenuItem>
                <MenuItem icon={<HomeOutlinedIcon />}>
                    <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem icon={<PeopleOutlinedIcon />}>
                    <Link to="/about">About</Link>
                </MenuItem>
                <MenuItem icon={<ContactsOutlinedIcon />}>
                    <Link to="/register">Registrar Equipo</Link>
                </MenuItem>
                <MenuItem icon={<ReceiptOutlinedIcon />}>
                    <Link to="/report">Reporte</Link>
                </MenuItem>
                <MenuItem icon={<CalendarTodayOutlinedIcon />}>
                    <Link to="/calendar">Calendario</Link>
                </MenuItem>
            </Menu>
            </Sidebar>
            <section>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/about" element={<About />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="/calendar" element={<Calendar />} /> */}
                </Routes>
            
            </section>
        </div>
    );
    }
    export default SidebarComponent;