import { FC, PropsWithChildren, SetStateAction, createContext, useState } from "react";

interface IContext {
    token: string,
    setToken: React.Dispatch<React.SetStateAction<string>>
}

export const TokenContext = createContext<IContext>({
    token: "",
    setToken: () => {}
})
export const TokenProvider:FC<PropsWithChildren> = (props) => {
    const [token, setToken] = useState('token123')
    const objToken = {token, setToken}
    return (
        <TokenContext.Provider value={objToken}>
            {props.children}
        </TokenContext.Provider>
    )
} 
