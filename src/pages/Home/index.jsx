import Navbar from '../../components/Navbar';
import SidebarComponent from '../../components/SidebarComponent';
const Home = () => {
    return (
        <div className="
        h-full
        w-full
        ">
        <Navbar />
        <div className="flex">
            <SidebarComponent />
            <div className="w-full">
                <h1 className="text-3xl font-bold text-center">Bienvenido al Sistema RTLS</h1>
            </div>
        </div>

        </div>
    );
    }
    export default Home;