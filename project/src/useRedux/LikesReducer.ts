import { LikesAction } from "./LikesAction";
import { LikesType } from "./LikesType";

export const LikesReducer = ( state: number[] = [], action: LikesAction) => {
    switch (action.type) {
        case LikesType.LIKES_ADD:
           return action.payload
        case LikesType.LIKES_REMOVE:
            return action.payload
        default:
            return state
    }
}