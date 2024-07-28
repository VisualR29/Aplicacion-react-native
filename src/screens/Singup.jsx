import { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { colors } from "../global/colors";
import { useSignUpMutation } from "../services/AuthServices";
import { setUser } from "../features/User/UserSlice";
import { signupSchema } from "../validations/singUpSchema";
import SubmitButton from "../components/SubmitButton";
import InputForm from "../components/InputForm";

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const dispatch = useDispatch()
    const [triggerSignUp, result] = useSignUpMutation()

    useEffect(() => {
        if (result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken,
                    localId: result.data.localId,
                })
            )
        }
    }, [result])

    const onSubmit = () => {
        try {
            setErrorMail("");
            setErrorPassword("");
            setErrorConfirmPassword("");
            signupSchema.validateSync({ email, password, confirmPassword })
            triggerSignUp({ email, password, returnSecureToken: true })
        } catch (err) {
            switch (err.path) {
                case "email":
                    setErrorMail(err.message);
                case "password":
                    setErrorPassword(err.message);
                case "confirmPassword":
                    setErrorConfirmPassword(err.message);
                default:
                    break;
            }
        }
    }

    return (
        <View style={styles.main}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Mis Finanzas</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Signup</Text>
                <InputForm
                    label={"email"}
                    onChange={setEmail}
                    error={errorMail}
                />
                <InputForm
                    label={"password"}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure={true}
                />
                <InputForm
                    label={"confirm password"}
                    onChange={setconfirmPassword}
                    error={errorConfirmPassword}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Send" />
                <Text style={styles.sub}>Already have an account?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLink}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Signup;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: colors.green400,
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