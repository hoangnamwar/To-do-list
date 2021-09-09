import { amountAction, AmountType } from "../action-type/amount";

const itinalState = 6

const amountReducer = (state: number = itinalState, action: amountAction) =>
{
    switch (action.type)
    {
        case AmountType.PLUS:
            return state + 1;

        default:
            return state
    }
}

export default amountReducer;