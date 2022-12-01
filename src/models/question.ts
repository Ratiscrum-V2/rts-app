export interface Question {
    id: number,
    question: string,
    image: string,
    choices: Choice[],
}