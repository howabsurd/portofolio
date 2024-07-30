import HTMLImg from "@/public/assets/images/tech/HTML5_logo_and_wordmark.svg";
import CSSImg from "@/public/assets/images/tech/CSS3_logo_and_wordmark.svg";
import JSImg from "@/public/assets/images/tech/JavaScript-logo.png";
import TsImg from "@/public/assets/images/tech/Typescript_logo_2020.svg";
import ReactImg from "@/public/assets/images/tech/React-icon.svg";
import CppImg from "@/public/assets/images/tech/ISO_C++_Logo.svg";
import GitImg from "@/public/assets/images/tech/Git_icon.svg";
import AWSImg from "@/public/assets/images/tech/Amazon_Web_Services_Logo.svg.png";
import JWTImg from "@/public/assets/images/tech/jwt-3.svg";
import ReduxImg from "@/public/assets/images/tech/redux-logo.svg";
import SequelizeImg from "@/public/assets/images/tech/sequelize.svg";
import GithubImg from "@/public/assets/images/tech/Octicons-mark-github.svg";
import NodeImg from "@/public/assets/images/tech/node-js-icon-454x512-nztofx17.png";
import ExpressImg from "@/public/assets/images/tech/express.svg";
import TailwindImg from "@/public/assets/images/tech/tailwindCss.png";
import MUIImg from "@/public/assets/images/tech/material-ui-1.svg";
import MongoImg from "@/public/assets/images/tech/mongodb.svg";
import MySQl from "@/public/assets/images/tech/MySQL_textlogo.svg.png"


export const stackData = [
    {
        title: "Basic",
        stack: [
            {
                id: 11,
                title: "HTML 5",
                image: HTMLImg,
                bgColor: ""
            },
            // {
            //     id: 12,
            //     title: "CSS 3",
            //     image: CSSImg,
            //     bgColor: ""
            // },
            {
                id: 13,
                title: "JavaScript",
                image: JSImg,
                bgColor: ""
            },
            {
                id: 14,
                title: "TypeScript",
                image: TsImg,
                bgColor: ""
            },]
            
    },
    {
        title: "Frontend",
        stack: [
            {
                id: 0,
                title: "React",
                image: ReactImg,
                bgColor: ""
            },
            {
                id: 1,
                title: "Redux toolkit",
                image: ReduxImg,
                bgColor: ""
            },
            {
                id: 2,
                title: "TailWindCSS",
                image: TailwindImg,
                bgColor: ""
            },
            {
                id: 3,
                title: "MUI5",
                image: MUIImg,
                bgColor: ""
            },]
            
    },
    {
        title: "Backend",
        stack: [
            {
                id: 4,
                title: "Node.js",
                image: NodeImg, // Ensure you import NodeImg similarly
                bgColor: ""
            },
            {
                id: 5,
                title: "Express",
                image: ExpressImg, // Ensure you import ExpressImg similarly
                bgColor: ""
            },
            {
                id: 6,
                title: "Sequelize",
                image: SequelizeImg,
                bgColor: ""
            },
            {
                id: 7,
                title: "JWT",
                image: JWTImg,
                bgColor: ""
            },
            {
                id: 8,
                title: "AWS",
                image: AWSImg,
                bgColor: ""
            }
        ]
    },
    {
        title: "Database",
        stack: [
            {
                id: 9,
                title: "MySQL",
                image: MySQl,
                bgColor: ""
            },
            {
                id: 10,
                title: "Mongoose",
                image: MongoImg,
                bgColor: ""
            }
        ]
    }
];
