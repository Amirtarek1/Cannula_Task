import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { FONT, COLORS } from '../../Constants/themes';
import { scale } from 'react-native-size-matters';
import Price_Component from '../../Component/Price_Component';
import Main_Button from '../../Component/Main_Button';



const Price_Visita = () => {



    return (
        <>
            <SafeAreaProvider style={{ backgroundColor: COLORS.Main_Color_White }}>
                <View style={{ padding: RFPercentage(3) }}>
                    <Text style={{
                        fontFamily: FONT.font_Almarai_Bold,
                        alignSelf: "flex-start",
                        fontSize: scale(17),
                        color: COLORS.Title_Color,
                        marginBottom: scale(5)
                    }}>سعر الكشف</Text>

                    <Price_Component Title={"الكشف في العيادة"} />
                    <Price_Component Title={"الكشف المنزلى"} />

                </View>


            </SafeAreaProvider>
            <View style={{
                backgroundColor: COLORS.Main_Color_White,
                shadowOffset: { height: 30, width: 100 },
                shadowColor: COLORS.black,
                elevation: 10,
                shadowOpacity: .7,
            }}>
                <Main_Button Title_Button={"التالي"}/>

            </View>
        </>
    );
};

export default Price_Visita;
