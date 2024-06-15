import { Task, TaskAction, TaskActionType } from "../types";

function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
  switch(action.type) {
    case TaskActionType.ADDED:
      return [...tasks, { id: action.id, text: action.text, done: false}]
    case TaskActionType.CHANGED:
      return tasks.map((task: Task) => {
        if (task.id === action.task.id) {
          return action.task
        }
        return task
      })
    case TaskActionType.DELETED:
      return tasks.filter((task: Task) => task.id !== action.id)
    default:
      throw new Error("Invalid action")
  }
}

export default tasksReducer