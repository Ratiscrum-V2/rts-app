import { DayLabel } from "../components/DayLabel";
import { IndicatorIcon } from "../components/IndicatorIcon";
import { Choice } from "../models/choice";
import { indicators, Indicators } from "../models/indicators.enum";
import { Question } from "../models/question";

export function ResultsPage({ question, choice, onNextRound }: { question: Question, choice: Choice, onNextRound: () => void }) {

    const randomValue = Math.round(Math.random() * 100);

    return <div className="grid lg:grid-cols-2 gap-10 w-full h-full lg:my-10 lg:mx-0 px-4 pb-1 overflow-y-auto">
        <div className="flex flex-col gap-5 grow">
            <div className="flex gap-5 items-start content-center">
                <h3 className="font-bold text-2xl opacity-50">Résultats</h3>
            </div>
            <div className="card bg-base-content drop-shadow-xl w-full">
                <div className="card-body items-center text-center flex-row p-3 gap-3">
                    <figure className="h-32 w-32">
                        <img src={`https://api.ratiscrum.tgimenez.fr/files/${question.media}`} className="rounded-xl" />
                    </figure>
                    <h3 className="card-title text-neutral my-auto flex-1">{question.question}</h3>
                </div>
            </div>
            <section>
                <h6 className="uppercase text-lg font-bold opacity-50">Vous avez choisi</h6>
                <h3 className="font-bold text-2xl">{choice.name}</h3>
            </section>
            <section className="flex flex-col gap-3">
                <h6 className="uppercase text-lg font-bold opacity-50">Effets sur vos indicateurs</h6>
                <div className="flex gap-8">
                    {indicators.map((indicator) => {
                        return <div key={indicator} className="flex gap-2 items-center">
                            <IndicatorIcon indicator={indicator}></IndicatorIcon>
                            <p className="text-2xl font-bold">{choice.effects[indicator]}</p>
                        </div>
                    })}
                </div>
            </section>
            <section className="flex flex-col gap-3">
                <h6 className="uppercase text-lg font-bold opacity-50">Ce que les autres ont choisis</h6>
                <div className="flex gap-4 items-center">
                    <p className="font-bold text-xl">{randomValue}%</p>
                    <progress className="progress progress-secondary flex-1" value={randomValue} max="100"></progress>
                    <p className="font-bold text-xl">{100-randomValue}%</p>
                </div>
            </section>
        </div >
        <div className="flex flex-col gap-5 grow">
            <h3 className="font-bold text-2xl opacity-50">Commentaires</h3>
            <div className="card bg-base-content drop-shadow-xl w-full grow">
                <div className="card-body items-center text-center flex-row p-3 gap-3">
                <div className="chat chat-end">
                    <div className="chat-header text-black">
                        Expert santé
                    </div>
                    <div className="chat-bubble chat-bubble-success">{question.answer}</div>
                </div>
                </div>
            </div>
            <button onClick={onNextRound} className="btn btn-accent btn-lg">
                Question suivante
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </div>
    </div >
}