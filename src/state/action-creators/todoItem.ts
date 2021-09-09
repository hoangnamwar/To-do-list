import { Dispatch } from "react"
import { Action, ActionType } from "../action-type/todoItem"


export const plusItem = (text: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.PLUS,
            payload: text,
        })
    }
}

export const removeItem = (id: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.REMOVE,
            payload: id,
        })
    }
}

export const checkItem = (id: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CHECK,
            payload: id,
        })
    }
}