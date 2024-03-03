import sublinks from "./data";
import { useGlobalContext } from "./Context";
import { useRef } from "react";

function Submenu() {
    const { pageId, setPageId } = useGlobalContext();
    const SubmenuContainer = useRef();

    const currentPage = sublinks.find((sublink) => sublink.pageId === pageId);

    const handleMouseLeave = (e) => {
        const { clientX, clientY } = e;
        const submenu = SubmenuContainer.current.getBoundingClientRect();
        const { left, right, bottom } = submenu;

        if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
            setPageId(null);
        }
    };

    return (
        <div
            onMouseLeave={handleMouseLeave}
            ref={SubmenuContainer}
            className={pageId ? "submenu show-submenu" : "submenu"}
        >
            <h5>{currentPage?.page}</h5>
            <div
                style={{
                    gridTemplateColumns:
                        currentPage?.links.length > 3 ? "1fr 1fr" : "1fr",
                }}
                className="submenu-links"
            >
                {currentPage?.links?.map((link) => (
                    <a key={link.id} href={link.url}>
                        {link.icon}
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Submenu;
