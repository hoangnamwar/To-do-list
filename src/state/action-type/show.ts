export enum ShowActionType
{
    CHANGE= 'CHANGE'
}

export type showType = "active" | "completed" | "all";


type changeShow = 
{
    type: ShowActionType.CHANGE,
    payload: showType
}

export type ShowAction = changeShow