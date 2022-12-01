import { QuestionCard } from "../components/QuestionCard";
import { Question } from "../models/question";

export function QuestionPage({ question }: { question: Question }) {
    return <div className="flex flex-col gap-2 h-screen items-center justify-center">
        <QuestionCard question={question}></QuestionCard>
    </div>
}