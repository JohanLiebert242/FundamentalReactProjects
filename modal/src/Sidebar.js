import { IoMdClose } from "react-icons/io";
import { links, social } from "./data";

function Sidebar({ isSidebarOpen, closeSidebar }) {
    return (
        <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
            <div className="sidebar-header">
                <img
                    alt="Coding addict"
                    src="https://raw.githubusercontent.com/john-smilga/react-course-v3/5eaad3588ff5deb8657156ec94322527fb7a5e96/04-fundamental-projects/12-sidebar/final/src/logo.svg"
                />
                <button
                    onClick={() => closeSidebar(true)}
                    className="close-btn"
                >
                    <IoMdClose />
                </button>
            </div>
            <div>
                <ul className="links">
                    {links.map((link) => (
                        <li key={link.id}>
                            <a href={link.url}>
                                {link.icon}
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <section className="">
                <ul className="social-links">
                    {social.map((icon) => (
                        <li key={icon.id}>
                            <a href={icon.url}>{icon.icon}</a>
                        </li>
                    ))}
                </ul>
            </section>
        </aside>
    );
}

export default Sidebar;
