import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import ImageUpload from "../../src/assets/Icons/ImageUpload.svg"
import { COLORS } from '../Constants/themes';
import { launchImageLibrary } from 'react-native-image-picker';

const Upload_Image = ({onImageSelected}) => {

    const [image, setImage] = useState(null);

    const selectImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.assets && response.assets.length > 0) {
                const selectedImage = response.assets[0];
                setImage(selectedImage);
                onImageSelected(selectedImage);
            }
        });
    };


    return (
        <>



            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity onPress={selectImage} style={styles.uploadButton}>
                    {image ? (
                        <Image source={{ uri: image.uri }} style={styles.image} />
                    ) : (
                        <ImageUpload width={scale(52)} height={scale(52)} />
                    )}
                </TouchableOpacity>
            </View>

        </>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadButton: {
        marginTop: scale(20),
        width: scale(120),
        height: scale(120),
        borderRadius: scale(60),
        backgroundColor: COLORS.Background_TextInputandImage,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: scale(10),
    },
    image: {
        width: scale(120),
        height: scale(120),
        borderRadius: scale(60),
    },
    fileName: {
        color: COLORS.Main_Color_Blue,
        marginTop: scale(10),
    },
});
export default Upload_Image;
