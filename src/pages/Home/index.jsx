import Navbar from '../../components/Navbar';
import SidebarComponent from '../../components/SidebarComponent';
const Home = () => {
    return (
        <div>
        <Navbar />
        <SidebarComponent />

        <h1 className="text-3xl font-bold underline">Home</h1>
        <p>This is the home page.</p>
        </div>
    );
    }
    export default Home;