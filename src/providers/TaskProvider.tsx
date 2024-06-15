import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";
import { Task, TaskAction, TaskBE } from "../types";
import tasksReducer from "../reducers/tasks";
import tasksBE from '../db/tasks.json'
import { TaskMapper } from "../utils/mapers";

const initialTasks: Task[] = tasksBE.map((task: TaskBE) => {
  return TaskMapper(task)
})

const TasksContext = createContext<Task[] | null>(null)
const TasksDispatchContext = createContext<Dispatch<TaskAction> | null>(null)

function useTasks() {
  const context = useContext(TasksContext)
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider")
  }
}

function useTasksDispatch() {
  const context = useContext(TasksDispatchContext)
  if (!context) {
    throw new Error("useTasksDispatch must be used within a TasksProvider")
  }
}

function TasksProvider({children}: {children: ReactNode}) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export {
  useTasks,
  useTasksDispatch,
  TasksProvider
}