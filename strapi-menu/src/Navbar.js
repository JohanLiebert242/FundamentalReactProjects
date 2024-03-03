import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";
import { useGlobalContext } from "./Context";

function Navbar() {
    const { openSidebar, setPageId } = useGlobalContext();

    const handleMouseOver = (e) => {
        //Vì dùng MouseOver nên sẽ trả lại các phần tử trên nav (nav-center, nav-links, nav-link,...)
        // -> chỉ cần check xem nếu như e.target trả về không là nav-link thì setPageId(null) -> tức hoverOut
        if (!e.target.classList.contains("nav-link")) {
            setPageId(null);
        }
    };

    return (
        <nav onMouseOver={handleMouseOver}>
            <div className="nav-center">
                <h3 className="logo">strapi</h3>
                <button
                    onClick={() => openSidebar(true)}
                    className="toggle-btn"
                >
                    <FaBars />
                </button>
                <NavLinks />
            </div>
        </nav>
    );
}

export default Navbar;
