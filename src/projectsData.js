import jldesign from "./assets/jldesign.png";
import cocktail from "./assets/cocktail.png";
import breaktimer from "./assets/breaktimer.png";
import recipe from "./assets/recipe.png";



export const ProjectsData = [
    {   
        id: 1,
        projectName: "JL Design Architecture Portfolio",
        projectTech: ["ReactJS", "NodeMailer and NodeJS", "HTML5", "CSS3"],
        projectDescription: "I worked with an architectural firm in South Western Ontario to build a portfolio website that puts their designs front and centre. Built in React and using NodeJS with Nodemailer for the backend contact form.",
        projectLiveLink: "http://jldesign.gourlay.me",
        projectGithubLink: "https://github.com/NicholG90/JLDesign",
        projectDesktopImage: jldesign,
        projectID: "jldesign"
        
    },
    {
        id: 2,
        projectName: "Cocktail Shaker",
        projectTech: ["ReactJS", "Firebase OAuth and Database", "HTML5", "CSS3", "API"],
        projectDescription: "A Cocktail App that allows the user to search for specific cocktails, find cocktails based on the ingredients and even choose a random cocktail. Designed and styled to harken back to 80s Synthwave. Written in React with a Firebase database backend and OAuth for users to save their favourite cocktails.",
        projectLiveLink: "http://cocktails.gourlay.me",
        projectGithubLink: "https://github.com/NicholG90/CocktailApp",
        projectDesktopImage: cocktail,
        projectID: "cocktail" 
    },
    {
        id: 3,
        projectName: "Break Time",
        projectTech: ["HTML5", "CSS3", "jQuery"],
        projectDescription: "A break timer built with JQUERY. It allows the user to select a specific time length for their break or choose from some popular choices. The timer then displays the amount of remaining with real-time styling changes.",
        projectLiveLink: "http://countdown.gourlay.me",
        projectGithubLink: "https://github.com/NicholG90/countdown",
        projectDesktopImage: breaktimer,
        projectID: "breaktimer"

    },
    {
        id: 4,
        projectName: "Recipe App",
        projectTech: ["HTML5", "CSS3", "jQuery"],
        projectDescription: "A break timer built with JQUERY. It allows the user to select a specific time length for their break or choose from some popular choices. The timer then displays the amount of remaining with real-time styling changes.",
        projectLiveLink: "http://countdown.gourlay.me",
        projectGithubLink: "https://github.com/NicholG90/countdown",
        projectDesktopImage: recipe,
        projectID: "recipe"

    }
]
