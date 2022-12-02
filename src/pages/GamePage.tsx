import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { questionsAPI } from "../assets/questions";
import { DayLabel } from "../components/DayLabel";
import { IndicatorBar } from "../components/IndicatorBar";
import { Choice } from "../models/choice";
import { indicators } from "../models/indicators.enum";
import { exampleQuestion } from "../models/mocks/question.mock";
import { Question } from "../models/question";
import { QuestionPage } from "./QuestionPage";
import { ResultsPage } from "./ResultsPage";

export default function GamePage() {

    useEffect(() => {
        pickRandomQuestion();
    }, [])

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

    const [alreadyAnsweredQuestions, setAlreadyAnsweredQuestions] = useState<number[]>([]);

    const [question, setQuestion] = useState<Question>(questionsAPI[0]);

    const [dayCount,  setDayCount] = useState(1);
    // const question = exampleQuestion;

    const pickRandomQuestion = () => {
        console.log("pick random question")
        let newQuestionIdx = -1;
        do {
            console.log("loop")
            newQuestionIdx = Math.floor(Math.random() * questionsAPI.length)
        } while(alreadyAnsweredQuestions.includes(newQuestionIdx) || newQuestionIdx < 0);
        setQuestion(questionsAPI[newQuestionIdx]);
        setAlreadyAnsweredQuestions([
            ...alreadyAnsweredQuestions,
            newQuestionIdx,
        ]);
    }

    const restartGame = () => {
        setPlayerIndicators(defaultIndicators);
        setIsGameOver(false);
        setIsResultPage(false);
        setDayCount(1);
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
        pickRandomQuestion();
        setIsResultPage(false);
        setDayCount(dayCount + 1);
    }

    if(isGameOver) {
        return <>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Vous avez perdu au jour {dayCount} 🥹</h1>
                    <p className="py-6">Essayez de mieux gérer vos choix la prochaine fois !</p>
                    <button className="btn btn-primary" onClick={() => {restartGame()}}>Rejouer</button>
                    </div>
                </div>
            </div>
        </>
    }

    return <>
    
    <div className="grow flex justify-center items-center">
            <DayLabel day={dayCount}></DayLabel>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-3 items-center self-center mr-4">
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