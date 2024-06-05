import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLORS, FONT } from '../Constants/themes';
import { RFPercentage } from 'react-native-responsive-fontsize';



const TextInput_Component = ({ Title ,touched ,value , onChangeText , errors }) => {


    return (
        <>




            <View style={{ marginBottom: scale(15) }}>
                <Text style={{
                    fontFamily: FONT.font_Almarai_Regular, alignSelf: "flex-start",
                    fontSize: scale(14), color: COLORS.Title_Color, marginBottom: scale(5)
                }}>{Title}</Text>
                <View>
                    <TextInput style={{
                        backgroundColor: COLORS.Background_TextInputandImage,
                        borderRadius: scale(8),
                        color: COLORS.Title_Color,
                        fontFamily: FONT.font_Almarai_Regular,
                    }} 
                    value={value}
                    onChangeText={onChangeText}

                    />
                </View>
                {errors && touched !== undefined ? <Text style={{
                // backgroundColor:"#00d", 
                marginTop:scale(2),
                color: COLORS.Red_Color,   justifyContent: "center",
                fontFamily: FONT.font_Almarai_Regular,
            }} >{errors}</Text>
                : <></>}
            </View>


          
        </>
    );
};

export default TextInput_Component;
