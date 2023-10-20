import jldesign from "./assets/screenshots/jldesign.png";
import cocktail from "./assets/screenshots/cocktail.png";
import recipe from "./assets/screenshots/recipe.png";
import bikesharefinder from "./assets/screenshots/bikesharefinder.png";
import votingbooth from "./assets/screenshots/votingbooth.png";
import jldesignmobile from "./assets/screenshots/jldesignmobile.png";
import cocktailmobile from "./assets/screenshots/cocktailmobile.png";
import recipemobile from "./assets/screenshots/recipemobile.png";
import bikesharefindermobile from "./assets/screenshots/bikesharefindermobile.png";
import votingboothmobile from "./assets/screenshots/votingboothmobile.png";


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
        projectName: "Recipe App",
        projectTech: ["HTML5", "CSS3", "API", "Vanilla JS", "Pair Programming"],
        projectDescription: "A recipe generator built in Vanilla JS. It allows the user to select a preferred cuisine, diet or to search and returns a relevent recipe. The results includes an animated recipe card with ingredients on the back and instructions.",
        projectLiveLink: "https://recipe-generator-nick-paridhi.netlify.app/",
        projectGithubLink: "https://github.com/recipeGeneratorNickParidhi/recipeGenerator",
        projectDesktopImage: recipe,
        projectMobileImage: recipemobile,
        projectID: "recipe"

    },
    {
        id: 4,
        projectName: "Bike Share Finder",
        projectTech: ["ReactJS", "Firebase", "HTML5", "CSS3", "API"],
        projectDescription: "A ReactJS application that allows a user to find bike share stations around the globe. Geolocation can be given by the user to route to their selected station. Uses Firebase to allow users to save their favourite stations.",
        projectLiveLink: "https://bikesharefinder-prod.nickgourlay.com/",
        projectGithubLink: "https://github.com/NicholG90/bikeShareFinder",
        projectDesktopImage: bikesharefinder,
        projectMobileImage: bikesharefindermobile,
        projectID: "bikesharefinder"

    },
    {
        id: 5,
        projectName: "Anonymous Voting Booth",
        projectTech: ["ReactJS", "Firebase", "HTML5", "CSS3", "Group Programming"],
        projectDescription: "A ReactJS group project. Allows users to create polls with 2 to 4 set answers that can be voted on anonymously. Polls can be saved by the creator and will show results in beautiful chartJS graphs.",
        projectLiveLink: "https://voting-booth-production.netlify.app/",
        projectGithubLink: "https://github.com/VotingBooth/votingBooth",
        projectDesktopImage: votingbooth,
        projectMobileImage: votingboothmobile,
        projectID: "votingbooth"

    },
];
