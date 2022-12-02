import { Question } from "../models/question";
import Logo from '../images/Ratisexe-dark.png'

export function QuestionCard({ question }: { question: Question }) {

    return <div className="card w-96 bg-base-content drop-shadow-xl">
        <figure className="p-3">
            <img src="https://placeimg.com/400/225/arch" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h3 className="card-title text-neutral my-auto">{question.question}</h3>
        </div>
        <img src={Logo} width={100} className="self-end absolute right-2 bottom-2"></img>
    </div>
}