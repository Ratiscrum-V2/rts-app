import { Choice } from "./choice";

export interface Question {
    id?: number,
    question: string,
    answer: string,
    media: number,
    image: {
        name: string; 
        extension: string;
        mimetype: string; 
    },
    choices: Choice[],
}