export type Position = {
  x: number;
  y: number;
}

export enum Operation {
  Add = 'add',
  Subtract = 'subtract',
  Multiply = 'multiply',
  Divide = 'divide'
}

export interface Domain {
  domain: string
  create_date: string
  country: string
  isDead: string
}

export interface Task {
  id: number
  text: string
  done: boolean
}

export interface TaskBE {
  id: number
  name: string
  completed: boolean
}

export enum TaskActionType {
  ADDED = 'added',
  CHANGED = 'changed',
  DELETED = 'deleted'
}

export type TaskAction = { type: TaskActionType.ADDED, id: number, text: string }
| { type: TaskActionType.CHANGED, task: Task }
| { type: TaskActionType.DELETED, id: number } 