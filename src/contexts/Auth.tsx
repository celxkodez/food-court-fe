import {createContext, useReducer} from 'react';
// import { User } from '../hooks/useUser';

interface User {
    name: string,
    email: string,
    password?: string
}
interface AuthContext {
    user: User | null;
    setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContext>({
    user: null,
    setUser: () => {},
});

function reducer(currentState:any, newState:any) {
    return { ...currentState, ...newState };
}

function Auth({children}: any) {
    const [state, dispatch] = useReducer(reducer, {
        user: null
    });
    return (
        <AuthContext.Provider value={{user: state, setUser: dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export { Auth, AuthContext };
