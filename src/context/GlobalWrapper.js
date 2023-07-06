import { createContext } from "react";
export const GlobalContext = createContext();
export default function Wrapper({children}){
    return <GlobalContext.Provider value={{ age : 30 }}>{children}</GlobalContext.Provider>
    
}