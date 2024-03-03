import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { useGlobalContext } from "./context";

import "./App.css";

function App() {
    const {
        isModalOpen,
        isSidebarOpen,
        openModal,
        closeSidebar,
        openSidebar,
        closeModal,
    } = useGlobalContext();

    return (
        <main>
            <Home openModal={openModal} openSidebar={openSidebar} />
            <Modal closeModal={closeModal} isModalOpen={isModalOpen} />
            <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar}/>
        </main>
    );
}

export default App;
