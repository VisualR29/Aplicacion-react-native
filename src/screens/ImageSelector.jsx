import { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { colors } from '../global/colors'
import { setCameraImage } from '../features/User/UserSlice';
import { useGetProfileimageQuery, usePostProfileImageMutation } from '../services/AppServices';

const ImageSelector = ({ navigation }) => {

    const [image, setImage] = useState(null)
    const [isImageFromCamera, setIsImageFromCamera] = useState(false);

    const dispatch = useDispatch()

    const [triggerPostImage, result] = usePostProfileImageMutation();
    const { localId } = useSelector((state) => state.auth.value);
    const { data: imageFromBase } = useGetProfileimageQuery(localId)

    const verifyCameraPermisson = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (!status) {
            return false
        }
        return true
    }

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermisson()
        setIsImageFromCamera(true)
        if (isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1, 1],
                base64: true,
                quality: 0.2,
            });

            if (!result.canceled) {
                setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
            }
        }
    }

    const confirmImage = async () => {
        try {
            dispatch(setCameraImage(image));
            triggerPostImage({ image, localId });
            if (isImageFromCamera) {
                await MediaLibrary.createAssetAsync(imageURI);
            }
            navigation.goBack();
        } catch (error) {
            navigation.goBack();
        }
    };

    return (
        <View style={styles.container}>
            {image || imageFromBase ?
                <>
                    <Image
                        style={styles.img}
                        resizeMode='cover'
                        source={{ uri: image || imageFromBase?.image }}
                    />
                    <Pressable
                        onPress={pickImage}
                        style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
                    >
                        <Text style={ styles.text }>Take new Photo</Text>
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
                        onPress={confirmImage}
                    >
                        <Text style={ styles.text }>Confirm photo</Text>
                    </Pressable>
                </> :
                <>
                    <View style={styles.containerPhoto}>
                        <Text>No photo to show...</Text>
                    </View>
                    <Pressable
                        onPress={pickImage}
                        style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
                    >
                        <Text style={ styles.text }>Take a photo</Text>
                    </Pressable>
                </>
            }
        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green400,
        flex: 1,
        alignItems: 'center'
    },
    btn: {
        marginTop: "5%",
        width: "80%",
        borderRadius: 15,
        backgroundColor: colors.beige200,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 16,
    },
    text: {
        fontSize: 18,
        color: colors.black,
    },
    img: {
        marginVertical: 20,
        height: 200,
        width: 200,
        borderRadius: 100
    },
    containerPhoto: {
        marginVertical: 20,
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})