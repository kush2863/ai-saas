
import React , {useState} from "react";

type initialValuesProp = {
        currentStep:number
        setCurrentStep:React.Dispatch<React.SetStateAction<number>>
    }

const initialValues : initialValuesProp ={
    currentStep:1,
    setCurrentStep:()=> undefined,
}

const authContext= React.createContext(initialValues);

const{Provider} = authContext;

export const  AuthContextProvider =({children,}:{children : React.ReactNode}) =>{
    const [currentStep, setCurrentStep] = useState<number>(
        initialValues.currentStep
    );
    const values ={
        currentStep,setCurrentStep,
    }

    return  <Provider value= {values}>{children}</Provider>
}

    export const useAuthContextHook =() =>{
        const state= React.useContext(authContext)
        return state
    }
