import { Dispatch } from "react"
import { ShowAction, ShowActionType, showType } from "../action-type/show"


export const changeShow = (show: showType) => {
    return (dispatch: Dispatch<ShowAction>) => {
        dispatch({
            type: ShowActionType.CHANGE,
            payload: show,
        })
    }
}

