import jldesign from "./assets/screenshots/jldesign.png";
import cocktail from "./assets/screenshots/cocktail.png";
import breaktimer from "./assets/screenshots/breaktimer.png";
import recipe from "./assets/screenshots/recipe.png";
import jldesignmobile from "./assets/screenshots/jldesignmobile.png";
import cocktailmobile from "./assets/screenshots/cocktailmobile.png";
import recipemobile from "./assets/screenshots/recipemobile.png";
import breaktimermobile from "./assets/screenshots/breaktimermobile.png";





export const projectsData = [
    {   
        id: 1,
        projectName: "JL Design Architecture Portfolio",
        projectTech: ["ReactJS", "NodeMailer", "HTML5", "CSS3"],
        projectDescription: "I worked with an architectural firm in South Western Ontario to build a portfolio website that puts their designs front and centre. Built in React and using NodeJS with Nodemailer for the backend contact form.",
        projectLiveLink: "http://jldesign.gourlay.me",
        projectGithubLink: "https://github.com/NicholG90/JLDesign",
        projectDesktopImage: jldesign,
        projectMobileImage: jldesignmobile,
        projectID: "jldesign"
        
    },
    {
        id: 2,
        projectName: "Cocktail Shaker",
        projectTech: ["ReactJS", "Firebase", "HTML5", "CSS3", "API"],
        projectDescription: "A Cocktail App that allows the user to search for specific cocktails, find cocktails based on the ingredients and even choose a random cocktail. Designed and styled to harken back to 80s Synthwave. Written in React with a Firebase database backend and OAuth for users to save their favourite cocktails.",
        projectLiveLink: "http://cocktails.gourlay.me",
        projectGithubLink: "https://github.com/NicholG90/CocktailApp",
        projectDesktopImage: cocktail,
        projectMobileImage: cocktailmobile,
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
        projectMobileImage: breaktimermobile,
        projectID: "breaktimer"

    },
    {
        id: 4,
        projectName: "Recipe App",
        projectTech: ["HTML5", "CSS3", "API", "Vanilla JS"],
        projectDescription: "A recipe generator built in Vanilla JS. It allows the user to select a preferred cuisine, diet or to search and returns a relevent recipe. The results includes an animated recipe card with ingredients on the back and instructions.",
        projectLiveLink: "recipe-generator-nick-paridhi.netlify.app/",
        projectGithubLink: "https://github.com/recipeGeneratorNickParidhi/recipeGenerator",
        projectDesktopImage: recipe,
        projectMobileImage: recipemobile,
        projectID: "recipe"

    }
]
