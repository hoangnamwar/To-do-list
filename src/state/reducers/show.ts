import { ShowAction, ShowActionType, showType } from "../action-type/show";


const showReducer = (state: showType = "all", action: ShowAction) =>
{
    switch (action.type)
    {
        case ShowActionType.CHANGE:
            return action.payload;

        default:
            return state
    }
}

export default showReducer;