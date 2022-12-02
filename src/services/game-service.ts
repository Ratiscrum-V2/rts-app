import axios from "axios";
import { Choice } from "../models/choice";
import { Question } from "../models/question";

export const getQuestion = () => axios.get<Question>("game/question");

// TODO: to change after api gets here.
export const sendChoice = (questionId: number, choice: Choice): any => axios.post("game/question/answer");

