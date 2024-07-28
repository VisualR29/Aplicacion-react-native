import { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { colors } from "../global/colors";
import { setUser } from "../features/User/UserSlice";
import { useSignInMutation } from "../services/AuthServices";
import { useDB } from "../Hooks/useDB";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch()
    const [triggerSignIn, result] = useSignInMutation()
    const { insertSession } = useDB();

    useEffect(() => {
        if (result?.data && result.isSuccess) {
            insertSession({
                email: result.data.email,
                localId: result.data.localId,
                token: result.data.idToken,
            })
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken,
                    localId: result.data.localId,
                })
            );
        }
    }, [result])

    const onSubmit = () => {
        triggerSignIn({ email, password, returnSecureToken: true })
    }

    return (
        <View style={styles.main}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Mis Finanzas</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Login to start</Text>
                <InputForm label={"email"} onChange={setEmail} error={""} />
                <InputForm
                    label={"password"}
                    onChange={setPassword}
                    error={""}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Send" />
                <Text style={styles.sub}>Not have an account?</Text>

                <Pressable onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.subLink}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: colors.green400
    },
    textContainer: {
        backgroundColor: colors.beige100,
        width: "60%",
        alignItems: "center",
        marginTop: "25%",
        paddingVertical: 15,
        borderRadius: 10,
    },
    text: {
        fontSize: 22,
        fontFamily: "MyFont",
        fontWeight: "bold",
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.beige100,
        gap: 15,
        marginTop: "25%",
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "MyFont",
        fontWeight: "bold",
    },
    sub: {
        fontSize: 14,
        color: "black",
    },
    subLink: {
        fontSize: 14,
        fontFamily: "MyFont",
        color: "blue",
    },
});