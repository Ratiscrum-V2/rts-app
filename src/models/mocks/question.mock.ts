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
                plaisir: 10,
                sante: -2,
                argent: 3,
            }
        },
        {
            name: 'Cela',
            effects: {
                plaisir: -10,
                sante: 2,
                argent: -3,
            }
        }
    ],
}