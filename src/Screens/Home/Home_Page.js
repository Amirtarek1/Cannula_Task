import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT } from '../../Constants/themes';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import Bell from "../../assets/Icons/bell.svg"
import { scale } from 'react-native-size-matters';
import { RFPercentage } from 'react-native-responsive-fontsize';
import WelcomeIcone from "../../assets/Icons/WelcomeIcone.svg"
import HomePage from "../../assets/Icons/HomePage.svg"
import Services from "../../assets/Icons/Services.svg"
import Profile from "../../assets/Icons/Profile.svg"
import { useNavigation } from '@react-navigation/native';


const Home_Page = () => {
    const navigation = useNavigation();


    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Password_page');
        }, 4000); 

        return () => clearTimeout(timer);
    }, [navigation]);


    return (
        <>
            <SafeAreaProvider style={{ backgroundColor: COLORS.Main_Color_White }}>
                <View style={{
                    padding: RFPercentage(3),
                    flex: 1,
                    justifyContent: "center",
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



{/*  Iknow that part is very wrong but sorry my internet connection is very baaaaad
Thanks 
*/}

                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor:COLORS.Main_Color_White,
                    shadowOffset: { height: 30, width: 100 },
                    shadowColor: COLORS.black,
                    elevation: 10,
                    shadowOpacity: .7,
                    padding:scale(4)
                }}>

                    <TouchableOpacity style={{ width: "35%", alignItems: "center",  justifyContent: "center" }} >
                        <View style={{ alignSelf: "center" }}>
                            <HomePage width={scale(40)} height={scale(30)} />
                        </View>
                        <Text style={{
                            fontFamily: FONT.font_Almarai_Bold,
                            alignSelf: "center",
                            textAlign: "center",
                            fontSize: scale(12),
                            color: COLORS.Second_Color_Blue,
                        }}>الرئيسية</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: "35%", alignItems: "center", justifyContent: "center" }} >
                        <View style={{ alignSelf: "center" }}>
                            <Services width={scale(40)} height={scale(30)} />
                        </View>
                        <Text style={{
                            fontFamily: FONT.font_Almarai_Bold,
                            alignSelf: "center",
                            textAlign: "center",
                            fontSize: scale(12),
                            color: COLORS.From_To_Word_Color,
                        }}>مواعيدى</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: "35%", alignItems: "center", justifyContent: "center" }} >
                        <View style={{ alignSelf: "center" }}>
                            <Profile width={scale(40)} height={scale(30)} />
                        </View>
                        <Text style={{
                            fontFamily: FONT.font_Almarai_Bold,
                            alignSelf: "center",
                            textAlign: "center",
                            fontSize: scale(12),
                            color: COLORS.From_To_Word_Color,
                        }}>الملف الشخصي</Text>

                    </TouchableOpacity>

                </View>


                

            </SafeAreaProvider>

        </>
    );
};

export default Home_Page;
