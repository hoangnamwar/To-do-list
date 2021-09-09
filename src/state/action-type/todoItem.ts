
export enum ActionType 
{
    PLUS= 'PLUS',
    REMOVE= 'REMOVE',
    CHECK= 'CHECK'
}

// type each action

type plusItem = {
    type: ActionType.PLUS,
    payload: string
}

type removeItem = {
    type: ActionType.REMOVE,
    payload: number
}

type checkItem = {
    type: ActionType.CHECK,
    payload: number
}

// type of Action

export type Action = plusItem | removeItem | checkItem