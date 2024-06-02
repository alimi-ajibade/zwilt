import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    bgColor: string;
    height: string;
}

const SkewedContainer = ({ children, bgColor, height }: Props) => {
    return (
        <div className={`relative -skew-y-2 ${height} ${bgColor}`}>
            <div className="skew-y-2">{children}</div>
        </div>
    );
};

export default SkewedContainer;
