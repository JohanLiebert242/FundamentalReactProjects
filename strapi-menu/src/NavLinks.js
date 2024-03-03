import sublinks from "./data";
import { useGlobalContext } from "./Context";

function NavLinks() {
    const { setPageId } = useGlobalContext();

    return (
        <div className="nav-links">
                {sublinks.map((link) => (
                    <button
                        onMouseEnter={() => setPageId(link.pageId)}
                        key={link.pageId}
                        className="nav-link"
                    >
                        {link.page}
                    </button>
                ))}
        </div>
    );
}

export default NavLinks;
