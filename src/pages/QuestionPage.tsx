import { DayLabel } from "../components/DayLabel";
import { QuestionCard } from "../components/QuestionCard";
import { QuestionChoice } from "../components/QuestionChoice";
import { Choice } from "../models/choice";
import { Question } from "../models/question";
import { Side } from "../models/side.enum";
import TinderCard from 'react-tinder-card'


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

    return <div className="flex flex-col justify-center items-center gap-2 h-screen">

        {/* TODO : Implement days */}
        <DayLabel day={1}></DayLabel>

        <div className="flex flex-1 gap-2 items-center justify-center">
            <QuestionChoice choice={question.choices[0]} side={Side.LEFT} click={() => onChoice(question.choices[0])}></QuestionChoice>
            <TinderCard 
                onSwipe={onSwipe}
                preventSwipe={['up', 'down']}
                swipeRequirementType="position"
                swipeThreshold={window.innerWidth * 0.15}
            >
                <QuestionCard question={question}></QuestionCard>
            </TinderCard>
            <QuestionChoice choice={question.choices[1]} side={Side.RIGHT} click={() => onChoice(question.choices[1])}></QuestionChoice>
        </div>
        <p className="text-center font-bold opacity-30 mb-5">Prenez une décision pour voir ce que les autres ont répondus !</p>
        <p className="text-center font-bold opacity-30 mb-5">Swipez ou cliquez !</p>
    </div>
}