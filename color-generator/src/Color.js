import { toast } from "react-toastify";

function Color({ color, index }) {
    const { hex, weight } = color;

    const copyToClipBoard = async () => {
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${hex}`);
                toast.success("Copied to clipboard!");
            } catch (error) {
                toast.error("Failed to copy to clipboard");
            }
        } else {
            toast.error("Clipboard access not available");
        }
    };

    return (
        <article
            onClick={copyToClipBoard}
            className={index > 10 ? " color color-light" : "color"}
            style={{
                background: `#${hex}`,
            }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hex}</p>
        </article>
    );
}

export default Color;
