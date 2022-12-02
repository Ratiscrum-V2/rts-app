import { Choice } from "../models/choice";
import { exampleQuestion } from "../models/mocks/question.mock";
import { QuestionPage } from "./QuestionPage";

export default function GamePage() {

    const question = exampleQuestion;

    const handleChoice = (choice: Choice) => {
        console.log("clicked on", choice);
    }

    return <QuestionPage question={question} onChoice={handleChoice}></QuestionPage>

}