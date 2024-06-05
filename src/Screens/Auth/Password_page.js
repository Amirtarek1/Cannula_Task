import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { FONT, COLORS } from '../../Constants/themes';
import { scale } from 'react-native-size-matters';
import Main_Button from '../../Component/Main_Button';
import Password_Component from '../../Component/Password_Component';
import { validationSchema } from '../../Forms/Schema';
import { Password_Initial_Values } from '../../Forms/Initial_Values';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';



const Password_page = ({ }) => {
    const navigation = useNavigation();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);



    return (
        <>
            <Formik
                initialValues={Password_Initial_Values}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <>

                        <SafeAreaProvider style={{ backgroundColor: COLORS.Main_Color_White }}>


                            <View style={{ padding: RFPercentage(3) }}>
                                <Text style={{
                                    fontFamily: FONT.font_Almarai_Bold,
                                    alignSelf: "flex-start",
                                    fontSize: scale(17),
                                    color: COLORS.Title_Color,
                                    marginBottom: scale(8)
                                }}>إكمال إنشاء الحساب</Text>

                                <Password_Component Title={"الرقم السري"}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    errors={errors.password}
                                    touched={touched.password}
                                    password={password}
                                    setPassword={setPassword}
                                    visible={passwordVisible}
                                    setVisible={setPasswordVisible}
                                />


                                <Password_Component Title={"تأكيد الرقم السري"}
                                    value={values.passwordConfirmation}
                                    onChangeText={handleChange('passwordConfirmation')}
                                    errors={errors.passwordConfirmation}
                                    touched={touched.passwordConfirmation}
                                    password={confirmPassword}
                                    setPassword={setConfirmPassword}
                                    visible={confirmPasswordVisible}
                                    setVisible={setConfirmPasswordVisible}
                                />


                            </View>


                        </SafeAreaProvider>
                        <View style={{
                            backgroundColor: COLORS.Main_Color_White,
                            shadowOffset: { height: 30, width: 100 },
                            shadowColor: COLORS.black,
                            elevation: 10,
                            shadowOpacity: .7,
                        }}>
                            <Main_Button Title_Button={"التالى"} confirm={()=>navigation.navigate("Price_Visita")}
                            />
                        </View>

                    </>
                )}
            </Formik>
        </>
    );
};

export default Password_page;
