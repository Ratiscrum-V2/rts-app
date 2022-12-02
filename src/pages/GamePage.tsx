import { exampleQuestion } from "../models/mocks/question.mock";
import { QuestionPage } from "./QuestionPage";

export default function GamePage() {

    const question = exampleQuestion;
    return <QuestionPage question={question}></QuestionPage>

}