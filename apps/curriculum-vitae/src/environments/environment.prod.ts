import {ConfigurationInterface} from "./configuration.interface";

const apiUrl = 'https://s3.eu-west-3.amazonaws.com/medias.cedricmoulard.io';

export const environment: ConfigurationInterface = {
    production: true,
    api: {
        experiences: `${apiUrl}/experiences.json`,
        skills: `${apiUrl}/skills.json`,
        avatar: `${apiUrl}/Portrait2015Carre.jpg`
    }
};
