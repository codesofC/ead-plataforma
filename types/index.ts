import { Dispatch, SetStateAction } from "react"

export type SidebarProps = {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}

export type CourseProps = {
  linkImage?: string,
  domain: string,
  title: string,
  professor?: string,
  percent: number,
}
export type LearningUnitProps = {
  linkImage: string,
  title: string,
  percent?: number,
  term?: Date
}