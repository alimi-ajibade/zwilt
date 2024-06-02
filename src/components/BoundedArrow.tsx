import Arrow from "./Arrow";

interface Props {
    direction?: string;
    arrowColor: string;
    bgColor: string;
    size: string;
    radius?: string;
    arrowHeight?: string;
    arrowWidth?: string;
}

const BoundedArrow = ({
    direction,
    arrowColor,
    size,
    bgColor,
    radius,
    arrowHeight,
    arrowWidth,
}: Props) => {
    return (
        <div
            className={`flex flex-col justify-center items-center rounded-2xl  ${size} ${bgColor} ${radius}`}>
            <Arrow
                color={arrowColor}
                direction={direction}
                height={arrowHeight}
                width={arrowWidth}
            />
        </div>
    );
};

export default BoundedArrow;
