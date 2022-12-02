import { useState } from "react";
import { Choice } from "../models/choice";
import { exampleQuestion } from "../models/mocks/question.mock";
import { QuestionPage } from "./QuestionPage";
import { ResultsPage } from "./ResultsPage";

export default function GamePage() {

    const [isResultPage, setIsResultPage] = useState(false);

    const question = exampleQuestion;

    const handleChoice = (choice: Choice) => {
        console.log("clicked on", choice);
        setIsResultPage(true);
    }

    const nextQuestion = () => {
        setIsResultPage(false);
    }

    if (isResultPage) {
        return <ResultsPage question={question} choice={question.choices[0]} onNextRound={nextQuestion}></ResultsPage>
    } else {
        return <QuestionPage question={question} onChoice={handleChoice}></QuestionPage>
    }

}