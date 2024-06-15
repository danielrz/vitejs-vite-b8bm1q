import { TaskBE, Task } from "../types";

export function TaskMapper(task: TaskBE): Task {
  return {
    id: task.id,
    text: task.name,
    done: task.completed
  }
}