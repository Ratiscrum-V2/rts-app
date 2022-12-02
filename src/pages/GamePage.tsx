import { useState } from "react";
import { Link } from "react-router-dom";
import { IndicatorBar } from "../components/IndicatorBar";
import { Choice } from "../models/choice";
import { indicators } from "../models/indicators.enum";
import { exampleQuestion } from "../models/mocks/question.mock";
import { QuestionPage } from "./QuestionPage";
import { ResultsPage } from "./ResultsPage";

export default function GamePage() {

    const defaultIndicators = indicators.map((indicator) => ({
        value: 50,
        indicator,
    }));

    const [playerIndicators, setPlayerIndicators] = useState(defaultIndicators)

    const [lastChoice, setLastChoice] = useState<Choice>({
        // :)))) kdo
        effects: null as any,
        name: "",
    });

    const [isResultPage, setIsResultPage] = useState(false);

    const [isGameOver, setIsGameOver] = useState(false);

    const question = exampleQuestion;

    const restartGame = () => {
        setPlayerIndicators(defaultIndicators);
        setIsGameOver(false);
        setIsResultPage(false);
    }

    const handleChoice = (choice: Choice) => {
        setLastChoice(choice);
        console.log("handleChoice")
        const playerIndicatorTemp = playerIndicators;
        Object.values(choice.effects).forEach((effect, index) => {
            playerIndicatorTemp[index] = {
                ...playerIndicators[index],
                value: playerIndicatorTemp[index].value + effect.valueOf(),
            }
        })

        playerIndicators.forEach((playerIndicator) => {
            if(playerIndicator.value <= 0) {
                setIsGameOver(true);
            }
        })

        setPlayerIndicators(playerIndicatorTemp);

        setIsResultPage(true);
    }

    const nextQuestion = () => {
        setIsResultPage(false);
    }

    if(isGameOver) {
        return <>
            <div className="flex flex-col lg:gap-3 items-center self-center mr-4">
                <h2>Vous avez perdu !</h2>
                <button className="btn btn-primary" onClick={() => restartGame()}>Redémarrer la partie</button>
            </div>
        </>
    }

    return <>
        <div className="flex flex-col lg:flex-row lg:gap-3 items-center self-end mr-4">
            {playerIndicators.map(({indicator, value}) => {
                return <IndicatorBar key={indicator} indicator={indicator} progress={value}></IndicatorBar>
            })}
        </div>
        {
            (isResultPage)
                ? <ResultsPage question={question} choice={lastChoice} onNextRound={nextQuestion}></ResultsPage>
                : <QuestionPage question={question} onChoice={handleChoice}></QuestionPage>
        }
    </>

    return

}