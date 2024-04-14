'use client'

import { useContext } from "react";
import { FirebaseContext } from "./index";

export const useFirebase = () => {
    const context = useContext(FirebaseContext)

    if(!context){
        throw("Not match context data!")
    }

    return context
}