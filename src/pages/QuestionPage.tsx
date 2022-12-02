import TinderCard from "react-tinder-card";
import { DayLabel } from "../components/DayLabel";
import { QuestionCard } from "../components/QuestionCard";
import { QuestionChoice } from "../components/QuestionChoice";
import { Choice } from "../models/choice";
import { Question } from "../models/question";
import { Side } from "../models/side.enum";

export function QuestionPage({ question, onChoice }: { question: Question, onChoice: (choice: Choice) => void }) {

    const onSwipe = (direction: any) => {
        console.log("YOU SWIPED " + direction);
        if(direction === 'left') {
            onChoice(question.choices[0]);
        }
        if(direction === 'right') {
            onChoice(question.choices[1]);
        }
    }

    return <div className="flex flex-col px-4 pb-1 gap-10 w-full h-full lg:my-10 mx-5 lg:mx-0 overflow-y-auto">

        <div className="grow flex justify-center items-center">
            {/* TODO : Implement days */}
            <DayLabel day={1}></DayLabel>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 items-center justify-center">
            <QuestionChoice className="order-last lg:order-first" choice={question.choices[0]} side={Side.LEFT} click={() => onChoice(question.choices[0])}></QuestionChoice>
            <TinderCard 
                onSwipe={onSwipe}
                preventSwipe={['up', 'down']}
                swipeRequirementType="position"
                swipeThreshold={window.innerWidth * 0.15}
            >
                <QuestionCard className="order-first" question={question}></QuestionCard>
            </TinderCard>
            <QuestionChoice className="order-last" choice={question.choices[1]} side={Side.RIGHT} click={() => onChoice(question.choices[1])}></QuestionChoice>
        </div>

        <div className="grow flexcontent-center items-center">
            <p className="text-center font-bold opacity-30 mb-5">Prenez une décision pour voir ce que les autres ont répondus !</p>
        </div>

    </div>
}