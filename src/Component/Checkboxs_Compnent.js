import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONT } from '../Constants/themes';
import { scale } from 'react-native-size-matters';
import Home from "../assets/Icons/Home.svg"
import Checkbox from "../assets/Icons/Checkbox.svg"
import Correct_Checkbox from "../assets/Icons/Correct_Checkbox.svg"
import Clinic from "../assets/Icons/Clinic.svg"

// 
const Checkboxs_Compnent = ({ Type_visita ,  inClinic, atHome,handleCheckbox  }) => {

    const [Checkbox_type, setCheckbox_type] = useState(false)



    return (
        <>


            <View style={{
                shadowColor: COLORS.Title_Color,
                elevation: 4,
                shadowOpacity: .1,
                paddingVertical: scale(8),
                marginTop: scale(5), borderRadius: scale(8),
                backgroundColor: COLORS.Background_TextInputandImage,
                flexDirection: "row", padding: scale(5), alignItems: "center", marginBottom:scale(13)
            }}>
                <TouchableOpacity
                    style={{ marginHorizontal: scale(10) }}
                    onPress={handleCheckbox}
                    >
                    {atHome || inClinic ? (<>
                        <Correct_Checkbox width={scale(30)} height={scale(30)} />
                    </>) :
                        (<>
                            <Checkbox width={scale(30)} height={scale(30)} />

                        </>)}
                </TouchableOpacity>
                <View style={{ marginHorizontal: scale(10) }}>
                    {Type_visita == "كشف منزلى" ? (<>
                        <Home width={scale(30)} height={scale(30)} />

                    </>) : (<>
                        <Clinic width={scale(30)} height={scale(30)} />

                    </>)}

                </View>
                <Text style={{
                    fontFamily: FONT.font_Almarai_Bold,
                    alignSelf: "center",
                    fontSize: scale(16),
                    color: COLORS.Second_Color_Blue
                }}>{Type_visita}</Text>

            </View>



        </>
    );
};

export default Checkboxs_Compnent;
