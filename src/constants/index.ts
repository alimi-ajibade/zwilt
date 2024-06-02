import logo from "../assets/logo.svg";
import heroImage from "../assets/zwilt-tba.gif";
import medal from "../assets/medal.svg";
import profiles from "../assets/profiles.svg";
import categories from "../assets/categories.svg";
import cinema from "../assets/technologies/cinema.png";
import data from "../assets/technologies/data.png";
import dotnet from "../assets/technologies/dotnet.png";
import figma from "../assets/technologies/figma.png";
import illustrator from "../assets/technologies/illustrator.png";
import magento from "../assets/technologies/magento.png";
import photoshop from "../assets/technologies/photoshop.png";
import shopify from "../assets/technologies/shopify.png";
import unreal from "../assets/technologies/unreal.png";
import webflow from "../assets/technologies/webflow.png";

const navlinks = [
    "Find Work",
    "Find Talents",
    "Articles",
    "About Us",
    "Contact Us",
];

const jobs = [
    "Python Developer",
    "Data Scientist",
    "Shopify Developer",
    "Shopify Developer",
    "Front End Development",
    "Python Developer",
    "MERN Stack Developer",
    "Shopify Developer",
    "Full Stack Developer",
    "Python Developer",
    "Full Stack Developer",
    "Explore More",
];

const stats = [
    {
        icon: medal,
        value: "989 Skills",
    },
    {
        icon: categories,
        value: "45 Sub-Categories",
    },
    {
        icon: profiles,
        value: "1011 Profiles",
    },
];

const development = [
    { value: "Shopify Devloper", icon: shopify },
    { value: "Magento Devloper", icon: magento },
    { value: "Data Scientist", icon: data },
    { value: "Webflow Devloper", icon: webflow },
    { value: "Dot Net Devloper", icon: dotnet },
];
const design = [
    {
        icon: figma,
        value: `UX 
        Designer`,
    },
    { icon: photoshop, value: "Graphics Designer" },
    { icon: illustrator, value: "illustration Artist" },
    { icon: unreal, value: "Unreal Engine" },
    {
        icon: cinema,
        value: `Cinema
    4D`,
    },
];

export { logo, heroImage, navlinks, jobs, stats, development, design };
