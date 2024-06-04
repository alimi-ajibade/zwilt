import ChooseUsContent from "./ChooseUsContent";
import SkewedContainer from "./SkewedContainer";

const ChooseUs = () => {
    return (
        <div className="mt-3 relative h-[64.06rem]">
            <SkewedContainer
                bgColor="bg-gradient-to-b from-white to-[#EFEFFF]"
                height="h-full"
                classname="absolute top-0 left-0">
                <></>
            </SkewedContainer>

            <div className="absolute top-0 left-0 pl-16 w-full no-scrollbar overflow-x-auto overflow-y-hidden py-[11.69rem]">
                <ChooseUsContent />
            </div>
        </div>
    );
};

export default ChooseUs;
