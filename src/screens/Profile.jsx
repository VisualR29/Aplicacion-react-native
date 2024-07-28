import { StyleSheet, View, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../global/colors'
import { useGetProfileimageQuery } from '../services/AppServices'
import { clearUser } from '../features/User/UserSlice'
import { useDB } from '../Hooks/useDB'
import ProfileButton from '../components/ProfileButton'
import Header from './../components/Header'

const Profile = ({ navigation }) => {
    const { truncateSessionTable } = useDB()
    const dispatch = useDispatch()
    const { imageCamera, localId } = useSelector((state) => state.auth.value)
    const { data: imageFromBase } = useGetProfileimageQuery(localId)
    const launchCamera = async () => {
        navigation.navigate("ImageSelector");
    };

    const defaultImageRoute = "../../assets/user.png";

    const signOut = () => {
        try {
            truncateSessionTable();
            dispatch(clearUser());
        } catch (error) {
            console.log({ errorSignOutDB: error });
        }
    }

    return (
        <View style={styles.container}>
            <Header title={"PROFILE"} />
            {imageFromBase || imageCamera ? (
                <Image
                    source={{ uri: imageFromBase?.image || imageCamera }}
                    style={styles.img}
                    resizeMode="cover"
                />
            ) : (
                <Image
                    style={styles.img}
                    resizeMode="cover"
                    source={require(defaultImageRoute)}
                />
            )}
            <ProfileButton
                onPress={launchCamera}
                title={
                    imageFromBase || imageCamera
                        ? "Modify profile picture"
                        : "Add profile picture"
                }
            />
            <ProfileButton onPress={signOut} title="SignOut" />
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    img: {
        height: 200,
        width: 200,
        borderRadius: 100
    },
    btn: {
        marginTop: 10,
        backgroundColor: colors.green1,
        width: "80%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        borderRadius: 5
    }
})