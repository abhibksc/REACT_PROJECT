import { createContext, useState } from "react";




export const ContextApi = createContext();

export const ContextProvider = ({children})=>{

    const [Show, setShow] = useState(false);
return <ContextApi.Provider value={{Show, setShow}}>
    {children}
</ContextApi.Provider>
}

