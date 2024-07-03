import { UnknownAction } from "redux";
import { LikesType } from "./LikesType";

export interface LikesAction extends UnknownAction {
    type: LikesType,
    payload: number[]
}