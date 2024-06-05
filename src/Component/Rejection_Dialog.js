import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Reject_box from "../assets/Icons/Reject_box.svg"
import { scale } from 'react-native-size-matters';
import { COLORS, FONT } from '../Constants/themes';
import { RFPercentage } from 'react-native-responsive-fontsize';


const Rejection_Dialog = () => {
    const [showModal, setShowModal] = useState(true);

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <Modal visible={showModal} transparent={true} animationType="fade">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View >
                        <Reject_box width={scale(45)} height={scale(45)} />
                    </View>
                    <Text style={styles.message}>تتعارض بعض مواعيد الحجز المنزلى مع مواعيد الكشف في العياده, من فضلك قُم بإعادة تعيينها.</Text>

                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>إعادة التعيين</Text>
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
        padding:RFPercentage(2),
        backgroundColor: COLORS.Background_TextInputandImage,
        justifyContent: "center",
        width: scale(320),
        height: scale(200),
        borderRadius: scale(8),
        alignItems: 'center',
    },
    message: {
        textAlign:"center",
        fontFamily: FONT.font_Almarai_Regular,
        fontSize: scale(12),
        color: COLORS.Title_Color,
        marginVertical: scale(20),
    },
    button: {
        backgroundColor: COLORS.Red_Color,
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

export default Rejection_Dialog;