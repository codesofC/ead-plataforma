import { Auth, Unsubscribe, User, UserCredential } from "firebase/auth"
import { DocumentData } from "firebase/firestore"
import { Dispatch, SetStateAction } from "react"

export type SidebarProps = {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    showSideBar: () => void
}

export type CourseProps = {
  image?: string,
  domain: string,
  title: string,
  teacher?: string,
  progress: number,
  id: string,
  inSemestre?: number
}
export type LearningUnitProps = {
  image?: string,
  title: string,
  expire?: Date,
  checked?: boolean
}

export type UserDataProps = {
  firstName: string,
  lastName: string,
  semestre: number,
  courseId: string
}

export type FirebaseProps = {
  userSession: User | null,
  setUserSession: Dispatch<SetStateAction<User | null>>,
  signInUser: (email: string, password: string) => Promise<UserCredential>,
  signOutUser: () => Promise<void>,
  getUser: (uid: string) => Promise<DocumentData | undefined>,
  getClasses: (id: string) => Promise<DocumentData | undefined>,
  userData: DocumentData | undefined,
  setUserData: Dispatch<SetStateAction<DocumentData | undefined>>,
  coursesData: DocumentData | undefined,
  setCoursesData: Dispatch<SetStateAction<DocumentData | undefined>>,
  auth: Auth,
  isLoading: boolean,
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export type FormUserProps = {
  email: string,
  password: string
}

export type MessageProps = {
  id: number;
  title: string;
  author: {
    firstName: string;
    lastName: string;
  };
  content: string;
  date: Date;
  module: string[];
}