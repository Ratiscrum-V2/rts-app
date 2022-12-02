import { Choice } from "../models/choice";
import { Side } from "../models/side.enum";

export function QuestionChoice({ choice, side, className, click }: { choice: Choice, side: Side, className?: string, click: () => void }) {
    return <button className={"btn btn-ghost btn-square w-full lg:w-32 lg:h-32" + className} onClick={click}>
        <div className="flex lg:flex-col gap-2 items-center content-center">
            {side === Side.LEFT
                ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>

                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            }
            <p>{choice.name}</p>
        </div >
    </button >
}