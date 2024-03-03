import { useRef, useState } from "react";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const linkContainerRef = useRef();
    const linksRef = useRef();

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };

    const linksStyles = {
        height: showLinks
            ? `${linksRef.current.getBoundingClientRect().height}px`
            : "0px",
    };

    return (
        <nav className="nav">
            <div className="nav-center">
                <div className="nav-header">
                    <img
                        className="logo"
                        alt="Coding addict"
                        src="https://raw.githubusercontent.com/john-smilga/react-course-v3/5eaad3588ff5deb8657156ec94322527fb7a5e96/04-fundamental-projects/11-navbar/final/src/logo.svg"
                    />
                    <button onClick={handleShowLinks} className="nav-toggle">
                        <FaBars />
                    </button>
                </div>
                <div
                    ref={linkContainerRef}
                    className="links-container"
                    style={linksStyles}
                >
                    <ul ref={linksRef} className="links">
                        {links.map((link) => (
                            <li key={link.id}>
                                <a href={link.url}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul className="social-icons">
                        {social.map((icon) => (
                            <li key={icon.id}>
                                <a href={icon.url}>{icon.icon}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
