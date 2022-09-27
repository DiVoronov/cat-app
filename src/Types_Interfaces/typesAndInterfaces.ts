export interface IValueContext {
  photo: string
  description: string
  id: string
  appear: boolean
  breed: string
}

export interface IPropsType {
  changeFunction: Function
  text: string
}

export interface ITransition {
  in: string
  timeout: number
  className: string
}