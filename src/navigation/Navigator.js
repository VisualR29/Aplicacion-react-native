import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import AuthStack from './AuthStack';
import { useState } from 'react';
import { useEffect } from 'react';
import { getSession } from '../persistence';
import { useDispatch } from 'react-redux';
import AppNavigator from './AppNavigator';
//importa setUser!!!

export default function Navigator() {

    //Codigo de SQLite
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await getSession()
    //             if (response.rows.length) {
    //                 const user = response.rows._array[0]
    //                 dispatch(setUser({
    //                     email: user.email,
    //                     localId: user.localId,
    //                     idToken: user.idToken,
    //                 }))
    //             }
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     })()
    // })

    // const [user, setUser] = useState(null)
    // console.log(useSelector((state) => state.auth.value))
    const { user } = useSelector((state) => state.auth.value)
    
    return (
        <NavigationContainer>
            {user ? <AppNavigator /> : <AuthStack/>}
        </NavigationContainer>
    )
}