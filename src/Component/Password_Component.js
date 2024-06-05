import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLORS, FONT } from '../Constants/themes';
import Eye from "../assets/Icons/eye.svg";
import Eye_Off from "../assets/Icons/Eye_Off.svg";

const Password_Component = ({ Title  , value , errors, touched ,onChangeText  }) => {
    const [Eye_choose, setEye_choose] = useState(true);

    const toggleEye = () => {
        setEye_choose(!Eye_choose);
    };

    return (
        <View style={{ marginBottom: scale(15) }}>
            <Text
                style={{
                    fontFamily: FONT.font_Almarai_Regular,
                    alignSelf: "flex-start",
                    fontSize: scale(16),
                    color: COLORS.Title_Color,
                    marginBottom: scale(5)
                }}
            >
                {Title}
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: COLORS.Background_TextInputandImage,
                    borderRadius: scale(8)
                }}
            >
                <TextInput
                    style={{
                        flex: 1,
                        color: COLORS.Title_Color,
                        fontFamily: FONT.font_Almarai_Regular,
                        padding: scale(10),
                        paddingLeft: scale(5),
                        textAlign: "right",
                    }}
                    secureTextEntry={Eye_choose}
                    onChangeText={onChangeText}
                    value={value}
                />
                <TouchableOpacity style={{ marginHorizontal: scale(8) }} onPress={toggleEye}>
                    {!Eye_choose ? (
                        <>
                            <Eye width={scale(30)} height={scale(30)} />

                        </>
                    ) : (
                        <>
                            <Eye_Off width={scale(30)} height={scale(30)} />

                        </>
                    )}
                </TouchableOpacity>
            </View>
        
            {errors && touched !== undefined ? <Text style={{
                  marginTop:scale(2),
                  color: COLORS.Red_Color,   justifyContent: "center",
                  fontFamily: FONT.font_Almarai_Regular,
              }} >{errors}</Text>
                  : <></>}
        
        </View>


    );
};

export default Password_Component;
