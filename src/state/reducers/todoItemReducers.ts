import { useEffect } from "react";
import { dummyData, DummyDataType, TodoItemType } from "../../dummyData";
import { Action, ActionType } from "../action-type/todoItem";

// const data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [...dummyData];

// const data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [...dummyData];

let test = localStorage.getItem('data');let testData: DummyDataType;
if (test === null)
{
    testData = [...dummyData];
}
else
{
    testData = JSON.parse(test);
    // testData = JSON.parse(test);
}

// useEffect(() => {
//     localStorage.setItem('myTasks', JSON.stringify(items))
//   }, [todoItemReducer])


const todoItemReducer = (state: DummyDataType = testData, action: Action) =>
{

    switch (action.type)
    {
        case ActionType.PLUS:
            {
                let id = state[state.length - 1].id + 1;
                return [...state, 
                    {
                        id: id,
                        text: action.payload,
                        checked: false
                }]
            }
            

        case ActionType.REMOVE:
            {
                let data = [...state];
                data.forEach(function (item: TodoItemType, index)
                {
                    if (item.id === action.payload)
                    {
                        data.splice(index, 1)
                    }
                })
                return [...data]
            }

        case ActionType.CHECK:
            {
                let data = [...state];
                data.forEach(function (item: TodoItemType, index)
                {
                    if (item.id === action.payload)
                    {
                        item.checked = ! item.checked;
                    }
                })
                return [...data]
            }

        default:
            return state
    }
}

export default todoItemReducer;