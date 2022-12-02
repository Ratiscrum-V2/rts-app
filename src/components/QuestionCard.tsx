import { Question } from "../models/question";
import Logo from '../images/Ratisexe-dark.png'

export function QuestionCard({ question, className }: { question: Question, className: string }) {

    return <div className={"card w-full lg:w-96 bg-base-content shadow-md hover:shadow-xl transform hover:scale-110 filter active:drop-shadow-2xl active:scale-125 " + className}>
        <figure className="p-3">
            <img src="https://placeimg.com/400/225/arch" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h3 className="card-title text-neutral my-auto mb-6">{question.question}</h3>
        </div>
        <img src={Logo} width={80} className="self-end absolute right-4 bottom-4"></img>
    </div>
}