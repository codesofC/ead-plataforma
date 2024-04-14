'use client'

import { useState, createContext } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut,  
  NextOrObserver,
  User} from "firebase/auth";
import { getFirestore, 
  doc, 
  getDoc, 
  collection, 
  query, 
  where, 
  getDocs, 
  DocumentData
} from "firebase/firestore";
import { CourseProps, FirebaseProps, UserDataProps } from '@/types/index';


const firebaseConfig = {
  apiKey: "AIzaSyAsJqdCyUNB893TdbheJNEgNwPBdbCa0tA",
  authDomain: "ead-plataforma-aadf3.firebaseapp.com",
  projectId: "ead-plataforma-aadf3",
  storageBucket: "ead-plataforma-aadf3.appspot.com",
  messagingSenderId: "963989540827",
  appId: "1:963989540827:web:032f74e18791f0f88be1fe"
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