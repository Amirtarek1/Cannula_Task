import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONT } from '../Constants/themes';
import { scale } from 'react-native-size-matters';




const Main_Button = ({Title_Button , confirm}) => {



    return (
        <>

            <TouchableOpacity onPress={confirm}
            
            style={{shadowColor: COLORS.Title_Color,
                elevation: 4,
                shadowOpacity: .1,
                width: scale(310), alignSelf:"center", margin:scale(20),
                backgroundColor: COLORS.Second_Color_Blue , borderRadius:scale(8)
            }}>
                <Text style={{ color: COLORS.Main_Color_White, textAlign: "center",
                 padding: scale(12), fontFamily: FONT.font_Almarai_Regular }}>{Title_Button}</Text>
            </TouchableOpacity>

        </>
    );
};

export default Main_Button;
