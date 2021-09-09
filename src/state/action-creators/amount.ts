import { Dispatch } from "react"
import { amountAction, AmountType } from "../action-type/amount"


export const plusItem = (text: string) => {
    return (dispatch: Dispatch<amountAction>) => {
        dispatch({
            type: AmountType.PLUS,
            payload: text,
        })
    }
}
