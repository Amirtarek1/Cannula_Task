import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLORS, FONT } from '../Constants/themes';



const Price_Component = ({ Title }) => {


    return (
        <>


            <View style={{ marginBottom: scale(15) }}>
                <Text style={{
                    fontFamily: FONT.font_Almarai_Regular,
                    alignSelf: "flex-start",
                    fontSize: scale(16),
                    color: COLORS.Title_Color,
                    marginBottom: scale(5)
                }}>{Title}</Text>
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    backgroundColor: COLORS.Background_TextInputandImage, borderRadius: scale(8)
                }}>
                    <TextInput style={{
                        flex: 1,
                        color: COLORS.Title_Color,
                        fontFamily: FONT.font_Almarai_Regular,
                        padding: scale(10),
                        paddingLeft: scale(5),
                        textAlign:"right"
                    }} />
                    <Text style={{ alignSelf: "center", marginRight:scale(10), marginLeft: scale(10), 
                    color: COLORS.Price_Color, fontFamily:FONT.font_Almarai_Bold }}>ج/م</Text>

                </View>

            </View>

        </>
    );
};

export default Price_Component;
