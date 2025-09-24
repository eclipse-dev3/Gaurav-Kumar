
//  Skills logos.....

import htmlLogo from './assets/techLogo/html.png';
import cssLogo from './assets/techLogo/css.png';
import javascript from "./assets/techLogo/javascript.png";
import reactLogo from './assets/techLogo/reactjs.png';
import reduxLogo from './assets/techLogo/redux.png';
import tailwindLogo from './assets/techLogo/tailwindcss.png';

// Backend logos....

import firebaseLogo from './assets/techLogo/firebase.png';
import appwriteLogo from './assets/techLogo/appwrite.png';

//  Languages logos.....

import cLogo from './assets/techLogo/c.png';
import cppLogo from './assets/techLogo/cpp.png';

// Tools logos.....

import gitLogo from './assets/techLogo/git.png';
import githubLogo from './assets/techLogo/github.png';
import vsCodeLogo from './assets/techLogo/vscode.png';
import vercelLogo from './assets/techLogo/vercel.png';
import netlifyLogo from './assets/techLogo/netlify.png';
import figmaLogo from './assets/techLogo/figma.png';

// profile Img

import ProfileImg from './assets/Profile.png'

export default ProfileImg;


// Projects Images

import Spotify from './assets/spotify.png'



// College & School logo

import SchoolLogo from './assets/school.jpeg'
import CollegeLogo from './assets/college.jpeg'





// Skills information array

export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascript },
            { name: 'React JS', logo: reactLogo },
            { name: 'Redux', logo: reduxLogo },
            { name: 'Tailwind CSS', logo: tailwindLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Firebase', logo: firebaseLogo },
            { name: 'Appwrite', logo: appwriteLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'JavaScript', logo: javascript },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vsCodeLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Netlify', logo: netlifyLogo },
            { name: 'Figma', logo: figmaLogo },
        ],
    },
];



// ........................................



export const projects = [
    {
        id: 0,
        title: "🎵 Music APP (Spotify Clone)",
        description: 'A responsive music streaming web app inspired by Spotify, featuring song search, play/pause, next/previous navigation, folder-based playlists, interactive seekbar, and volume control. Built with modern web technologies, it highlights my skills in DOM manipulation, event handling, and responsive UI design.',
        image: Spotify,
        tags: ["HTML", "CSS", "JavaScript", "API"],
        github: "https://github.com/eclipse-dev3/spotify-clone",
        webapp: "https://gaurav-spotify-03.vercel.com",
    },
]



// Education section...............

export const education = [

    {
        id: 1,
        img: CollegeLogo,
        school: "IP PG College, Campus 2, BSR",
        date: "2021 – 2024",
        grade: "67.2%",
        desc: "I pursued my BCA from IP PG College where I built a solid foundation in computer science and software development. During these years, I learned programming languages like C, C++, and JavaScript, along with database management and web technologies. I also worked on several academic and personal projects, such as a Spotify Clone and my portfolio website, which helped me strengthen my frontend development skills in React, HTML, CSS, and Tailwind CSS.",
        degree: "🎓 Bachelor of Computer Applications(BCA)",
    },
    {
        id: 2,
        img: SchoolLogo,
        school: "Vivekanand Saraswati Vidya Mandir Inter College, BSR",
        date: "2019 - 2021",
        grade: "70%",
        desc: "Vivekanand Saraswati Vidya Mandir Inter College, BSR | 2019 – 2021 I completed my 12th in the science stream with a focus on Mathematics and Physics, which helped me develop strong analytical and logical thinking skills.",
        degree: "UP Board(XII) - PCM with Computer Science ",
    },
    {
        id: 3,
        img: SchoolLogo,
        school: "Vivekanand Saraswati Vidya Mandir Inter College, BSR",
        date: "2018 – 2019",
        grade: "83%",
        desc: "Vivekanand Saraswati Vidya Mandir Inter College, BSR | 2018 – 2019 I finished my 10th from the same school, which gave me a strong academic base and discipline to move forward in higher education.",
        degree: "UP Board(X) - Science & Mathematics",
    },
];