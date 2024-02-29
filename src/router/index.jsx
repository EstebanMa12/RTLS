/* eslint-disable no-unused-vars */
import {Sidebar, Menu, MenuItem, SubMenu, useProSidebar} from 'react-pro-sidebar';
import {  Route, Routes } from "react-router-dom";
import {Link} from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DevicesFoldIcon from '@mui/icons-material/DevicesFold';
import Home from '../pages/Home';
import About from '../pages/About';
import RegisterDevice from '../pages/RegisterDevice';
import Report from '../pages/Report';
import Calendar from '../pages/Calendar';
import Devices from '../pages/Devices';

const AppRouter = () => {
    const { collapseSidebar } = useProSidebar();
    return (
        <div className='flex h-full '>
            <Sidebar style={{ height: "100vh"}}>
            <Menu iconShape="square"
                // menuItemStyles={{
                //     button: ({ level, active, disabled }) => {
                //       // only apply styles on first level elements of the tree
                //       if (level === 0)
                //         return {
                //           color: disabled ? '#f5d9ff' : '#d359ff',
                //           backgroundColor: active ? '#eecef9' : undefined,
                //         };
                //     },
                //   }}

            >
                <MenuItem
                    icon={<MenuOutlinedIcon/>}
                    onClick={() => {
                        collapseSidebar();
                    }}
                    style = {{cursor: "pointer", textAlign: "center"}}
                >
                    {" "}
                    <h2 className="
                    text-2xl
                    font-bold
                    text-center
                    text-orange-800
                    ">RTLS System</h2>
                </MenuItem>
                <MenuItem 
                    icon={<HomeOutlinedIcon/>}
                    component={<Link to="/"/>}
                >
                    Home
                </MenuItem>
                <MenuItem 
                    icon={<PeopleOutlinedIcon />}
                    component={<Link to="/about" />}
                >
                    About
                </MenuItem>
                <MenuItem
                    icon={<DevicesFoldIcon />}
                    component={<Link to="/devices" />}
                >
                    Devices Information
                </MenuItem>
                <MenuItem 
                    icon={<ContactsOutlinedIcon />}
                    component={<Link to="/register" />}
                >
                    Registrar Equipo
                </MenuItem>
                <MenuItem 
                    icon={<ReceiptOutlinedIcon />}
                    component={<Link to="/report" />}
                >
                    Reporte
                </MenuItem>
                <MenuItem 
                    icon={<CalendarTodayOutlinedIcon />}
                    component={<Link to="/calendar" />}
                >
                    Calendario
                </MenuItem>
            </Menu>
            </Sidebar>
            <section className=' w-full'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/register" element={<RegisterDevice />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/devices" element={<Devices/>} /> 
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </section>
        </div>
    );
    }
    export default AppRouter;