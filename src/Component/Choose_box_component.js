import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLORS, FONT } from '../Constants/themes';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';
import { get_All_Specializations } from '../Redux/Reducers/Get_Specializations';

const Choose_box_component = ({ Title, specializations }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.specializations);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);

  useEffect(() => {
    if (!specializations) {
      dispatch(get_All_Specializations());
    }
  }, [dispatch, specializations]);

  const dropdownItems = specializations?.map((item) => ({
    label: item.name,
    value: item.id,
    key: item.id,
  })) || []; 

  return (
    <>
      <View style={{ marginBottom: scale(15) }}>
        <Text
          style={{
            fontFamily: FONT.font_Almarai_Regular,
            alignSelf: 'flex-start',
            fontSize: scale(14),
            color: COLORS.Title_Color,
            marginBottom: scale(5),
          }}
        >
          {Title}
        </Text>

        <View style={{ alignSelf: 'center', alignItems: 'center' }}>
          {loading ? (
            <Text
              style={{
                fontFamily: FONT.font_Almarai_Regular,
                alignSelf: 'flex-start',
                fontSize: scale(14),
                color: COLORS.Title_Color,
              }}
            >
يتم تحميل التخصصات 
            </Text>
          ) : (
            <DropDownPicker
              open={open}
              value={value}
              items={dropdownItems}
              setOpen={setOpen}
              setValue={setValue}
              onChangeItem={(item) => setSelectedSpecialization(item.value)}
              labelStyle={{
                fontSize: scale(14),
                fontFamily: FONT.font_Almarai_Regular,
                backgroundColor: COLORS.Background_TextInputandImage,
                borderWidth: 0,
                alignSelf: 'center',
              }}
              listItemLabelStyle={{
                fontSize: scale(14),
                justifyContent: 'center',
                fontFamily: FONT.font_Almarai_Regular,
                color: COLORS.black,
                borderWidth: 0,
              }}
              style={{
                backgroundColor: COLORS.Background_TextInputandImage,
                borderRadius: scale(8),
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: 0,
              }}
              textStyle={{
                alignSelf: 'center',
                fontSize: scale(14),
                justifyContent: 'center',
                fontFamily: FONT.font_Almarai_Regular,
                color: COLORS.black,
              }}
              placeholder=""
              listMode="MODAL"
              isRTL={true} 
            />
          )}
        </View>
      </View>
    </>
  );
};

export default Choose_box_component;
