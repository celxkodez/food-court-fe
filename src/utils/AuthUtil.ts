import { useContext } from 'react';

export interface User {
    name: string;
    email: string;
    authToken?: string;
}

export const AuthUtil = () => {
    // const { user, setUser } = useContext(Auth);
    // const { setItem } = useLocalStorage();

    const login = ({email, password}: {email:string, password: string}) => {

        const dummyUsers = {
            name: "Dummy User Name",
            email: 'email@email.com',
            password: 'password'
        }

        if (
            email === dummyUsers.email &&
            password === dummyUsers.password
        ) {

            return Promise.resolve(dummyUsers);
        }

        return Promise.reject(false);
    };

    const logOut = () => {
        // setUser(null);
    };

    return {login, logOut };
};