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
import quotes from "../assets/quote.svg";
import jasonAvatar from "../assets/avatar.png";
import groovehq from "../assets/groovehq.svg";
import groovesm from "../assets/groovesm.svg";
import play from "../assets/play.svg";
import playWhite from "../assets/playWhite.svg";
import one from "../assets/1.svg";
import two from "../assets/2.svg";
import three from "../assets/3.svg";
import group1 from "../assets/group1.png";
import group2 from "../assets/group2.png";
import group3 from "../assets/group3.png";
import whyUs1 from "../assets/whyUs1.png";
import whyUs2 from "../assets/whyUs2.png";
import whyUs3 from "../assets/whyUs3.png";

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

const testimonial = {
    name: "Jason Makki",
    post: "Engineer at GROOVE",
    location: "San Francisco",
    testmonial:
        "Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters.",
};

const assurance = [
    { value: "Resume Screening" },
    {
        value: "Video Interview",
        description:
            "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    { value: "Technical Evaluation" },
    { value: "Application Review" },
    { value: "Lets get to work" },
];

const gettingStarted = [
    {
        bgColor: "bg-[#EDEFFF]",
        number: one,
        header: "Find your next star performer.",
        detail: "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
        image: group1,
    },
    {
        bgColor: "bg-[#FFF7E1]",
        number: two,
        header: "Evaluate to your heart’s content.",
        detail: "Assess the candidate through work history, transparent tests and video interviews.",
        image: group2,
    },
    {
        bgColor: "bg-[#F3F3F3]",
        number: three,
        header: `Start building
        your team.`,
        detail: "Onboard your candidate right away and start creating the next big thing.",
        image: group3,
    },
];

const whyUs = [
    {
        header: "Onboard without the risk.",
        reasons: [
            "We pick the best for you to select",
            "Thousands of vetted candidates in dozens of categories.",
            "Risk-free resource swapping for the best fit.",
        ],
        bulletinColor: "bg-[#50589F]",
        image: whyUs1,
    },
    {
        header: `An open 
        book`,
        reasons: [
            "Easy and transparent one-to-one chat with candidates.",
            "Simple and convenient payment methods.",
            "Review past ratings.",
        ],
        bulletinColor: "bg-[#FFBE2E]",
        image: whyUs2,
    },
    {
        header: `Stay in the
        loop.`,
        reasons: [
            "Track your staff activity down to every minute with screenshots.",
            "Comprehensive timesheet data to process payments.",
            "Create projects to organize and assign tasks more effectively.",
        ],
        bulletinColor: "bg-[#C7F4C2]",
        image: whyUs3,
    },
];

export {
    logo,
    heroImage,
    navlinks,
    jobs,
    stats,
    development,
    design,
    quotes,
    jasonAvatar,
    groovehq,
    groovesm,
    testimonial,
    assurance,
    play,
    playWhite,
    gettingStarted,
    whyUs,
};
