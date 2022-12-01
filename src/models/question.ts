import { Choice } from "./choice";

export interface Question {
    id: number,
    question: string,
    answer: string,
    image: string,
    choices: Choice[],
}