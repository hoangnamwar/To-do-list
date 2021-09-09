
export enum AmountType 
{
    PLUS= 'PLUS',
}

// type each action

type plusAmount = {
    type: AmountType.PLUS,
    payload: string
}

// type of Action

export type amountAction = plusAmount