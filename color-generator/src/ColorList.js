import { nanoid } from "nanoid";
import Color from "./Color";

function ColorList({colors}) {

    return (
        <section className="colors">
            {colors.map((color, index) => (
                <Color key={nanoid()} color={color} index={index} />
            ))}
        </section>
    );
}

export default ColorList;
