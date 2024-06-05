import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT } from '../../Constants/themes';
import { Text, View } from 'react-native';
import Bell from "../../assets/Icons/bell.svg"
import { scale } from 'react-native-size-matters';
import { RFPercentage } from 'react-native-responsive-fontsize';
import WelcomeIcone from "../../assets/Icons/WelcomeIcone.svg"


const Home_Page = () => {


    return (
        <>
            <SafeAreaProvider style={{ backgroundColor: COLORS.Main_Color_White }}>
                <View style={{
                    padding: RFPercentage(3), flex: 1, justifyContent: "center",
                }}>


                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{
                            fontFamily: FONT.font_Almarai_Bold,
                            alignSelf: "flex-start",
                            fontSize: scale(17),
                            color: COLORS.Title_Color,
                            marginBottom: scale(8)
                        }}>إكمال إنشاء الحساب</Text>
                        <Bell width={scale(30)} height={scale(30)} />
                    </View>


                    <View style={{
                        flex: 1,
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <View style={{ padding: RFPercentage(2), alignSelf: "center", alignItems: "center" }}>
                            <WelcomeIcone width={scale(110)} height={scale(110)} />
                        </View>
                        <Text style={{
                            fontFamily: FONT.font_Almarai_Regular,
                            textAlign: "center",
                            fontSize: scale(13),
                            color: COLORS.Price_Color,
                            marginBottom: scale(8)
                        }}>عند الموافقه على طلبك سييم التواصل معك وبعدها تسطيع ممارسة عملك كطبيب علي كاينولا</Text>
                    </View>


                </View>


            </SafeAreaProvider>

        </>
    );
};

export default Home_Page;
