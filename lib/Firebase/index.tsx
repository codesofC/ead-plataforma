'use client'

import { useState, createContext } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut} from "firebase/auth";
import { getFirestore, 
  doc, 
  getDoc, 
  DocumentData
} from "firebase/firestore";
import { FirebaseProps } from '@/types/index';


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MENSSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize context
export const FirebaseContext = createContext<FirebaseProps | null>(null)

const Firebase = ({ children }: { children: React.ReactNode }) => {
  const auth = getAuth(app)
  const db = getFirestore(app)

  const [userId, setUserId] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState<DocumentData | undefined>()
  const [coursesData, setCoursesData] = useState<DocumentData | undefined>()

  //Connection User
  const signInUser = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password)

  //Look if the user is already connected
  const verificationConnection = (userFunction: (user: any) => void) => onAuthStateChanged(auth, userFunction)

  //SignOut
  const signOutUser = () => signOut(auth)

  //Connections database
  const getUser = async (uid: string) => {
    const userRef = doc(db, `students/${uid}`)
    const docSnap = await getDoc(userRef)

    return docSnap?.data()
  }

  //Get the classes relative to the user
  const getClasses = async(id: string) => {
    const courseRef = doc(db, `courses/${id}`)

    const docSnap = await getDoc(courseRef)

    return docSnap?.data()
  }

  return (
    <FirebaseContext.Provider value={{
      isLoading,
      getClasses,
      getUser,
      setIsLoading,
      setUserId,
      signInUser,
      signOutUser,
      userId,
      verificationConnection,
      userData,
      setCoursesData,
      setUserData,
      coursesData
    }}>
      { children }
    </FirebaseContext.Provider>
  )
}

export default Firebase