import { useState } from "react";
import { IndicatorBar } from "../components/IndicatorBar";
import { Choice } from "../models/choice";
import { indicators } from "../models/indicators.enum";
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

    return <>
        <div className="flex flex-col lg:flex-row lg:gap-3 items-center self-end mr-4">
            {indicators.map((indicator) => {
                return <IndicatorBar key={indicator} indicator={indicator} progress={70}></IndicatorBar>
            })}
        </div>
        {
            (isResultPage)
                ? <ResultsPage question={question} choice={question.choices[0]} onNextRound={nextQuestion}></ResultsPage>
                : <QuestionPage question={question} onChoice={handleChoice}></QuestionPage>
        }
    </>

    return

}