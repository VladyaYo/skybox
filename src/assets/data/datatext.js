import logo1 from "../img/logoTeams/logo2.png"
import logo2 from "../img/logoTeams/Group384.png";
import logo3 from "../img/logoTeams/images1.png";
import logo4 from "../img/logoTeams/Team_Liquidlogo_square1.png";
import logo5 from "../img/logoTeams/Freaks-4U.png";
import navi from "../img/NAVI_logo.png";
import photo1 from "../img/Group 330.jpg";
import btnBg1 from "../img/buttonTabBg1.jpg"
import btnBg2 from "../img/buttonTabBg2.jpg"
import btnBg3 from "../img/buttonTabBg3.jpg"
import tab1bg from "../img/bgTab1.jpg"
import imgNews1 from "../img/newsImage1.jpg"
import imgNews2 from "../img/imageNews2.jpg"
import logocs from "../img/logocsgotransparent.png"

const pagesData = {
        homeData:{
            firstScreen:{
            h1: "Technologies - Esports. Elevated",
            h1span: "Skybox ",
            subheading1: "Skybox is an integrated platform offering visualisation, analysis and coaching tools for all levels!",
            subheading2: "Professional teams, novice players, global broadcasters and grassroots clubs alluse Skybox to elevate their esports activities.",
            button: "download",
            },
            getFree:{
                heading:"Get Skybox free",
                subheading:"Get started with our free suite of tools. Upgrade when you’re ready!"
            },
            trustedBy:[
                {
                    logo:logo1,
                    title:"esl",
                    description: "World’s largest esports organisation running professional events and broadcasts",
                    link: "www.eslgaming.com"
                },
                {
                    logo:logo2,
                    title:"CLOUD9",
                    description: "North American Professional MGO",
                    link: "www.cloud9.gg"
                },
                {
                    logo:logo3,
                    title:"NACCS",
                    description: "North American Collegiate Counterstrike representing over 300 college teams",
                    link: "Visit site"
                },
                {
                    logo:logo4,
                    title:"Team Liquid",
                    description: "Worldwide Professional MGO",
                    link: "www.eslgaming.com"
                },
                {
                    logo:logo5,
                    title:"Freaks4U",
                    description: "German and French Broadcaster working across numerous verticals",
                    link: "www.eslgaming.com"
                },
                {
                    logo:"../assets/img/logoTeams/images%201.png",
                    title:"esl",
                    description: "World’s largest esports organisation running professional events and broadcasts",
                    link: "www.eslgaming.com"
                },
                {
                    logo:"../assets/img/logoTeams/images%201.png",
                    title:"esl",
                    description: "World’s largest esports organisation running professional events and broadcasts",
                    link: "www.eslgaming.com"
                },
                {
                    logo:"../assets/img/logoTeams/images%201.png",
                    title:"esl",
                    description: "World’s largest esports organisation running professional events and broadcasts",
                    link: "www.eslgaming.com"
                },
                {
                    logo:"../assets/img/logoTeams/images%201.png",
                    title:"esl",
                    description: "World’s largest esports organisation running professional events and broadcasts",
                    link: "www.eslgaming.com"
                }
            ],
            testimonials:[
                {
                    photo: photo1,
                    logo: navi,
                    name:"Sean Gares",
                    info:"Professional CS:GO Player and Analyst",
                    testimonial:"Skybox has the ability to revolutionize Counter-Strike analytics on multiple fronts.  As a broadcast tool, desk segments will have access to easy to digest overview replays.  New viewers, especially at large events like majors, will appreciate the visual aid of a tool like Skybox.  More importantly, Skybox has potential to improve teamwork and development...  Recognizing patterns, or how your opponent reacts, has never been easier"
                },
                {
                    photo: photo1,
                    logo: navi,
                    name:"Sean Gares",
                    info:"Professional CS:GO Player and Analyst",
                    testimonial:"Skybox has the ability to revolutionize Counter-Strike analytics on multiple fronts.  As a broadcast tool, desk segments will have access to easy to digest overview replays.  New viewers, especially at large events like majors, will appreciate the visual aid of a tool like Skybox.  More importantly, Skybox has potential to improve teamwork and development...  Recognizing patterns, or how your opponent reacts, has never been easier"
                },
                {
                    photo: photo1,
                    logo: navi,
                    name:"Sean Gares",
                    info:"Professional CS:GO Player and Analyst",
                    testimonial:"Skybox has the ability to revolutionize Counter-Strike analytics on multiple fronts.  As a broadcast tool, desk segments will have access to easy to digest overview replays.  New viewers, especially at large events like majors, will appreciate the visual aid of a tool like Skybox.  More importantly, Skybox has potential to improve teamwork and development...  Recognizing patterns, or how your opponent reacts, has never been easier"
                },
                {
                    photo: photo1,
                    logo: navi,
                    name:"Sean Gares",
                    info:"Professional CS:GO Player and Analyst",
                    testimonial:"Skybox has the ability to revolutionize Counter-Strike analytics on multiple fronts.  As a broadcast tool, desk segments will have access to easy to digest overview replays.  New viewers, especially at large events like majors, will appreciate the visual aid of a tool like Skybox.  More importantly, Skybox has potential to improve teamwork and development...  Recognizing patterns, or how your opponent reacts, has never been easier"
                },

            ],
            pricing:[
                {
                    heading:"Individual & Teams Basic",
                    about:"Stats, match analysis and 3D replays",
                    price: "free",
                    button: "Try for free"
                },
                {
                    heading:"Teams",
                    about:"Review, analyze and improve as a team!",
                    price: 42,
                    button: "get started"
                },
                {
                    heading:"Organizations",
                    about:"Integrated tools for player & team development across all levels",
                    price: 60,
                    button: "get started"
                },
                {
                    heading: "Tournaments & Broadcasts",
                    about: "The plug and play technology to transform spectatorship!",
                    price: "Check out features",
                    button: "get started"
                }
            ],
            tabs:[
                {
                    tabButtonText: "Analyze & Elucidate",
                    tabButtonBg: btnBg1,
                    span: "Go deep",
                    text: " inside matches with the Skybox 3D Viewer!",
                    bg: tab1bg
                },
                {
                    tabButtonText: "Actionable Insighte",
                    tabButtonBg: btnBg2,
                    span: "The Analytics Portal",
                    text: " gives you the information you need to win!",
                    bg: tab1bg
                },
                {
                    tabButtonText: "Next Gen Broadcasts",
                    tabButtonBg: btnBg3,
                    span: "Get the Skybox",
                    text: " toolbox to take event broadcasts to the next level!",
                    bg: tab1bg
                }
            ],
            news:[
                {
                    img: imgNews1,
                    title: "Skybox Technologies to test machine learning at BLAST Pro Series in 2020",
                    text: "The CS:GO.ai initiative is comprised of two competitions: one with a $5,000 (£3,859) reward for the team with the best code, and another for the top five participating teams which earns them an invitation to BLAST Pro Series in Copenhagen to run their code during matches. The winner of the latter will be announced before the grand final.",
                    link: "https://esportsinsider.com/2019/11/skybox-machine-learning-competition/"
                },
                {
                    img:imgNews2,
                    title: "Skybox co-founder wants to “empower” the parents of CS:GO players",
                    text: "The Australian, who previously managed Tuchmeow Studios, a mobile game development company based in Denmark, spent months researching the esports industry with his colleagues, trying to find out where the gaps were. After eight months of solid work, Project Battle Stats was born, designed to empower teachers and players alike by providing them with all the tools necessary to grasp and properly analyse the skills needed to play one of the...",
                    link: "https://www.theloadout.com/csgo/skybox-technologies"
                }
            ],
            footer:{
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam",
                madeBy: "made by ein-de-ein",
                right: "©SKYBOX2019",

            }
        },
        csgoPage:{
            firstScreen:{
                image: logocs ,
                subheading: "Experience CS:GO like never before! Visualize, Analyse, Excel – The world’s best CS:GO teams use Skybox",
                button: "GET SKYBOX FOR FREE",

            },
            infoBlock:{
                text:"The Skybox platform integrates a set of powerful tools to let you analyse gameplay, pinpoint critical improvement areas and find your winning edge in",
                bold: " Counterstrike: Global Offensive!",
            },
            tabs:[
                {
                    button: "Players, Teams & Coaches",
                    heading:"Skybox 3D Viewer",
                    subheading:"A superpowered platform to take your CS:GO game to new levels!",
                    subheading2:"Go deep into played matches! (or just use Skybox to watch your frag highlights from a completely different perspective!)",
                    block:[
                        {
                            image: "",
                            heading: "",
                            text: ""
                        },
                        {
                            image: "",
                            heading: "",
                            text: ""
                        }
                    ],
                },
                {
                    button: "Organisations",
                    block:[
                        {
                            image: "",
                            heading: "",
                            text: ""
                        },
                        {
                            image: "",
                            heading: "",
                            text: ""
                        }
                    ],
                },
                {
                    button: "Tournaments & Broadcasters",
                    block:[
                        {
                            image: "",
                            heading: "elmf;w",
                            text: ""
                        },
                        {
                            image: "",
                            heading: "",
                            text: ""
                        }
                    ],
                }
            ]
        }
    }
export default pagesData;
