/* eslint-disable no-unused-vars */
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import SensorsIcon from '@mui/icons-material/Sensors';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DevicesFoldIcon from "@mui/icons-material/DevicesFold";
import GamepadIcon from '@mui/icons-material/Gamepad';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';


import Home from "../pages/Home";
import About from "../pages/About";
import RegisterDevice from "../pages/RegisterDevice";
import Report from "../pages/Report";
import Calendar from "../pages/Calendar";
import Devices from "../pages/Devices";
import { ModeToggle } from "@/components/mode-toggle";
import MainProvider from "../providers/MainProvider";
import Sensor from "../pages/Sensor"
import ButtonPage from "../pages/ButtonPage";
import LastValues from "@/pages/LastValues";
import InfoIcon from '@mui/icons-material/Info';

const AppRouter = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="flex h-full ">
      <Sidebar style={{ height: "100vh" }}>
        <Menu iconShape="square">
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ cursor: "pointer", textAlign: "center" }}
          >
            {" "}
            <h2
              className="
                    text-2xl
                    font-bold
                    text-center
                    text-orange-800
                    "
            >
              RTLS System
            </h2>
          </MenuItem>
          <MenuItem
            icon={<SensorsIcon />}
            component={<Link to="/sensor" />}
          >
            Datos del sensor
          </MenuItem>
          <MenuItem
            icon={<GamepadIcon />}
            component={<Link to="/button" />}
          >
            Estados del botón
          </MenuItem>
          <MenuItem
            icon={<ViewAgendaIcon  />}
            component={<Link to="/lastValues" />}
          >
            Ultimos valores
          </MenuItem>
          <MenuItem
            icon={<InfoIcon/>}
            component={<Link to="/about" />}
          >
            About
          </MenuItem>
        {/* ------------------------------------------------ */}

          
          <div className="flex justify-end mt-8">
            <ModeToggle />
          </div>
        </Menu>
      </Sidebar>
      <section className=" w-full">
        <Routes>
          <Route path="/" element={<MainProvider/>}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<RegisterDevice />} />
            <Route path="/report" element={<Report />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/devices" element={<Devices />} />
            <Route path= "/sensor" element={<Sensor/>}/>
            <Route path= "/button" element={<ButtonPage/>}/>
            <Route path= "/lastValues" element={<LastValues/>}/>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </section>
    </div>
  );
};
export default AppRouter;
