import { Indicators } from "../models/indicators.enum";
import { IndicatorIcon } from "./IndicatorIcon";

export function IndicatorBar({ indicator, progress }: { indicator: Indicators, progress: number }) {
    return <div className="flex items-center gap-3">
        <IndicatorIcon indicator={indicator} ></IndicatorIcon>
        <progress className="progress progress-secondary w-36 lg:w-56 bg-white bg-opacity-30" value={progress} max="100"></progress>
    </div>
}