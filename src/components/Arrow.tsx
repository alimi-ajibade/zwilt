interface Props {
    direction?: string;
    color: string;
    width?: string;
    height?: string;
}

const Arrow = ({ direction, color, width, height }: Props) => {
    return (
        <svg
            width={width || 25}
            height={height || 15}
            viewBox="0 0 35 23"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
            className={direction}>
            <path
                d="M19.0933 11.671C19.0933 16.7077 15.007 20.7908 9.96633 20.7908C4.92564 20.7908 0.839355 16.7077 0.839355 11.671C0.839355 6.63425 4.92564 2.55119 9.96633 2.55119C15.007 2.55119 19.0933 6.63425 19.0933 11.671Z"
                fill={color}
            />
            <path
                d="M16.7464 22.3542V0.987793L35.0003 11.671L16.7464 22.3542Z"
                fill={color}
            />
        </svg>
    );
};

export default Arrow;
