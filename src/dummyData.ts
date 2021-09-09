export type TodoItemType = {
    id: number,
    text: string,
    checked: boolean
}

export type DummyDataType = TodoItemType[];

export const dummyData : DummyDataType = [
    {
      id: 1,
      text: "Learn HTML/CSS",
      checked: true
    },
    {
      id: 2,
      text: "10 minutes meditation",
      checked: false
    },
    {
      id: 3,
      text: "Read for 1 hour",
      checked: false
    },
    {
      id: 4,
      text: "Complete online JavaScript course",
      checked: true
    },
    {
      id: 5,
      text: "Pick up groceries",
      checked: false
    },
    {
      id: 6,
      text: "Complete Todo App Frontend Mentor",
      checked: false
    }
]