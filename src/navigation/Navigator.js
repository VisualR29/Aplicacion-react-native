import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { setUser } from '../features/User/UserSlice';
import { useDB } from '../Hooks/useDB';
import AuthStack from './AuthStack';
import AppNavigator from './AppNavigator';

export default function Navigator() {

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth.value)
    const { getSession } = useDB()

    useEffect(() => {
        (async () => {
            try {
                const response = await getSession();
                if (response) {
                    const user = response;
                    dispatch(
                        setUser({
                            email: user.email,
                            localId: user.localId,
                            idToken: user.token,
                        })
                    );
                }
            } catch (error) {
                console.log(error);
            }
        })();
    });

    return (
        <NavigationContainer>
            {user ? <AppNavigator /> : <AuthStack/>}
        </NavigationContainer>
    )
}