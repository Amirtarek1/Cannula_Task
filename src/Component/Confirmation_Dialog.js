import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Correct_Checkbox from "../assets/Icons/Correct_Checkbox.svg"
import { scale } from 'react-native-size-matters';
import { COLORS, FONT } from '../Constants/themes';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

const Confirmation_Dialog = () => {
    const [showModal, setShowModal] = useState(true);
    const navigation = useNavigation();

    const handleClose = () => {
        navigation.navigate("Home_Page")
        setShowModal(false);
    };

    return (
        <Modal visible={showModal} transparent={true} animationType="fade">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View >
                        <Correct_Checkbox width={scale(45)} height={scale(45)} />
                    </View>
                    <Text style={styles.message}>تم ارسال طلبك,  سيتم التواصل معك.</Text>

                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>الصفقة الرئيسية</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#000a',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        padding:RFPercentage(1.5),
        backgroundColor: COLORS.Background_TextInputandImage,
        justifyContent: "center",
        width: scale(320),
        height: scale(200),
        borderRadius: scale(8),
        alignItems: 'center',
    },
    message: {
        fontFamily: FONT.font_Almarai_Regular,
        fontSize: scale(14),
        color: COLORS.Title_Color,
        marginVertical: scale(20),
    },
    button: {
        backgroundColor: COLORS.Second_Color_Blue,
        padding: RFPercentage(1.7),
        borderRadius: scale(8),
        width: '90%',
    },
    buttonText: {
        color: COLORS.Background_TextInputandImage,
        fontFamily:FONT.font_Almarai_Regular,
        fontSize: scale(14),
        textAlign: 'center',
    },
});

export default Confirmation_Dialog;