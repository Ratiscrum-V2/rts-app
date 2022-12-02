import { Question } from "../question";

export const exampleQuestion: Question = {
    id: 1,
    question: "Que faut-il faire ?",
    image: 'picture.png',
    answer: "this is the answer",
    choices: [
        {
            name: 'Ceci',
            effects: {
                0: 12,
                1: -2,
                2: 3,
            }
        },
        {
            name: 'Cela',
            effects: {
                0: 12,
                1: -2,
                2: 3,
            }
        }
    ],
}