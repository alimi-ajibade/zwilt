import Arrow from "./Arrow";

interface Props {
    direction?: string;
    color: string;
    bgColor: string;
    size: string;
    radius?: string;
}

const BoundedArrow = ({ direction, color, size, bgColor, radius }: Props) => {
    return (
        <div
            className={`flex flex-col justify-center items-center rounded-2xl  ${size} ${bgColor} ${radius}`}>
            <Arrow color={color} direction={direction} />
        </div>
    );
};

export default BoundedArrow;
