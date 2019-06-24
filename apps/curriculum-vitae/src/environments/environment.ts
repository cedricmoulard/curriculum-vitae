// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {ConfigurationInterface} from "./configuration.interface";

export const environment: ConfigurationInterface = {
    production: false,
    api: {
        experiences: '/assets/experiences.json',
        skills: '/assets/skills.json',
        avatar: 'https://s3.eu-west-3.amazonaws.com/medias.cedricmoulard.io/Portrait2015Carre.jpg'
    }

};
