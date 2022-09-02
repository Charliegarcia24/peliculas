import { SpokenLanguage } from "./spoken-language.model";

export class Movie {
    id?: number;

    name?: string;

    overview?: string;

    release_date?: string;

    title?: string;

    runtime?: number;

    spoken_languages?: SpokenLanguage[];
}