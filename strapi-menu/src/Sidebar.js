import { IoMdClose } from "react-icons/io";
import sublinks from "./data";
import { useGlobalContext } from "./Context";

function Sidebar() {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
            <div className="sidebar-container">
                <button
                    onClick={() => closeSidebar(true)}
                    className="close-btn"
                >
                    <IoMdClose />
                </button>
                <div className="sidebar-links">
                    {sublinks.map((sublink) => (
                        <article key={sublink.pageId}>
                            <h4>{sublink.page}</h4>
                            <div className="sidebar-sublinks">
                                {sublink.links.map((link) => (
                                    <a key={link.id} href={link.url}>
                                        {link.icon}
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
