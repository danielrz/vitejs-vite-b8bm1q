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