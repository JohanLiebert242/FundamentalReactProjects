import { FaBars } from "react-icons/fa";

function Home({ openModal, openSidebar }) {
    return (
        <>
            <button
                onClick={() => openSidebar(true)}
                className="sidebar-toggle"
            >
                <FaBars />
            </button>
            <button onClick={() => openModal(true)} className="btn">Show modal</button>
        </>
    );
}

export default Home;
