import logo from "../assets/zwit.png";
import { navlinks } from "../constants";
import style from "../styles";
import { SectionWrapper } from "../hoc";

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between items-center rounded-2xl py-2 pl-[1.79rem] pr-[0.57rem] bg-[#525AA0] mt-[25px] shadow-xl">
            <div>
                <img src={logo} sizes="5" />
            </div>

            <ul className={`flex flex-row gap-7 ${style.sectionText}`}>
                {navlinks.map((nav) => {
                    return <li key={nav}>{nav}</li>;
                })}
            </ul>

            <div className={`flex flex-row gap-5 ${style.sectionText}`}>
                <button>Log In</button>
                <button
                    className={`bg-white text-black rounded-2xl py-[0.88rem] px-[1.31rem]`}>
                    Join Now
                </button>
            </div>
        </nav>
    );
};

export default SectionWrapper(Navbar);
