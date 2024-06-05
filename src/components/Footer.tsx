import FooterContent from "./FooterContent";
import SkewedContainer from "./SkewedContainer";

const Footer = () => {
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 h-[77.44rem] w-full bg-gradient-to-b from-[#0C0C0C] to-[#202229]"></div>
            <SkewedContainer
                height="h-[75.44rem]"
                bgColor="aboslute top-0 left-0 bg-gradient-to-b from-[#0C0C0C] to-[#202229] pt-[64px]">
                <div>
                    <FooterContent />
                </div>
            </SkewedContainer>

            <div className="absolute -bottom-10 left-0  w-full h-[41px] bg-[#202229] mt-8 border-t flex flex-row items-center justify-between px-[70px]">
                <div className="text-base text-white">
                    All rights reserved by Zwilt
                </div>
                <div className="flex flex-row justify-between gap-x-5">
                    <div className="text-base text-white opacity-60 underline">
                        Privacy Policy
                    </div>
                    <div className="text-base text-white opacity-60 underline">
                        Privacy Policy
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
