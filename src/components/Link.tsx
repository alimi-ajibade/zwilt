import { useState } from "react";
import BoundedArrow from "./BoundedArrow";

interface Props {
    width: string;
    height: string;
    text: string;
    textSize: string;
    size: string;
    radius?: string;
}

const Link = ({ width, height, text, textSize, size, radius }: Props) => {
    const [move, setMove] = useState(false);
    return (
        <div
            className={`relative flex flex-row items-center gap-x-3 ${width} ${height}`}
            // onMouseEnter={() => setMove(true)}
            // onMouseLeave={() => setMove(false)}
        >
            <div
                className={`inline-block absolute left-0 ${
                    move ? "translate-x-full" : ""
                }`}>
                <BoundedArrow
                    bgColor="bg-black"
                    arrowColor="#EDEFFF"
                    size={size}
                    radius={radius || "rounded-2xl"}
                />
            </div>
            <div
                className={`inline-block absolute right-0 ${textSize} font-medium ${
                    move ? "-translate-x-full" : ""
                }`}>
                {text}
            </div>
        </div>
    );
};

export default Link;
