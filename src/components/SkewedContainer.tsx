import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    bgColor: string;
    height: string;
    classname?: string;
}

const SkewedContainer = ({ children, bgColor, height, classname }: Props) => {
    return (
        <div className={`relative -skew-y-2 ${height} ${bgColor} ${classname}`}>
            <div className="skew-y-2">{children}</div>
        </div>
    );
};

export default SkewedContainer;
