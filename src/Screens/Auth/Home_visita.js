import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { COLORS, FONT } from '../../Constants/themes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { scale } from 'react-native-size-matters';
import Correct_Checkbox from "../../assets/Icons/Correct_Checkbox.svg";
import ToggleSwitch from 'toggle-switch-react-native';
import Main_Button from '../../Component/Main_Button';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';


const Home_visita = ({ Flow_one }) => {
    const navigation = useNavigation();

    const initialTimes = {
        sun: [{ from: '9 : 00 ص', to: '12 : 00 م' }],
        mon: [{ from: '9 : 00 ص', to: '12 : 00 م' }],
        tue: [{ from: '9 : 00 ص', to: '12 : 00 م' }],
        wed: [{ from: '9 : 00 ص', to: '12 : 00 م' }],
        thu: [{ from: '9 : 00 ص', to: '12 : 00 م' }],
    };

    const [examinationDuration, setExaminationDuration] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [currentSelection, setCurrentSelection] = useState(null);
    const [times, setTimes] = useState(initialTimes);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isHomeVisit, setIsHomeVisit] = useState({
        sun: false,
        mon: false,
        tue: false,
        wed: false,
        thu: false,
    });

    const toggleSwitch = (day) => {
        setIsHomeVisit((prevState) => {
            const newState = {
                ...prevState,
                [day]: !prevState[day],
            };

            if (!newState[day] && !times[day]) {
                setTimes((prevTimes) => ({
                    ...prevTimes,
                    [day]: [{ from: '9 : 00 ص', to: '12 : 00 م' }],
                }));
            }

            return newState;
        });
    };

    const showDatePicker = (selection, day, index) => {
        setCurrentSelection({ selection, day, index });
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (event, newTime) => {
        if (newTime) {
            const { day, selection, index } = currentSelection;

            // Use moment to format the time in 12-hour format
            const formattedTime = moment(newTime).format('hh:mm A');

            setTimes((prevTimes) => {
                const newTimes = [...prevTimes[day]];

                // Update the selected time slot with the new formatted time
                if (selection === 'from') {
                    newTimes[index] = {
                        ...newTimes[index],
                        from: formattedTime,
                    };
                } else if (selection === 'to') {
                    newTimes[index] = {
                        ...newTimes[index],
                        to: formattedTime,
                    };
                }

                // Update the state with the modified times
                return {
                    ...prevTimes,
                    [day]: newTimes,
                };
            });
        }
        hideDatePicker();
    };



    const addNewTimeSlot = (day) => {
        setTimes((prevTimes) => ({
            ...prevTimes,
            [day]: [...prevTimes[day], { from: '9 : 00 ص', to: '12 : 00 م' }],
        }));
    };

    const parseTime = (timeStr) => {
        const [hourStr, minuteStr] = timeStr.split(':').map(s => s.trim());
        const hour = parseInt(hourStr, 10);
        const minute = parseInt(minuteStr, 10) || 0;
        return [hour, minute];
    };

    const getAllSelectedDaysAndTimesFormatted = () => {
        const selectedDaysAndTimesFormatted = {};
        Object.keys(times).forEach((day) => {
            if (isHomeVisit[day]) {
                const appointments = times[day].map(slot => ({
                    from: parseTime(slot.from),
                    to: parseTime(slot.to),
                }));
                selectedDaysAndTimesFormatted[day] = { appointments, examinationDuration };
            }
        });
        return selectedDaysAndTimesFormatted;
    };


    useEffect(() => {
        const selectedDaysAndTimes = getAllSelectedDaysAndTimesFormatted();
        console.log(JSON.stringify(selectedDaysAndTimes, null, 2));
    }, [times, isHomeVisit, examinationDuration]);



    const days = [
        { key: 'sun', label: 'الأحد', enable: true },
        { key: 'mon', label: 'الأثنين', enable: false },
        { key: 'tue', label: 'الثلاثاء', enable: false },
        { key: 'wed', label: 'الأربعاء', enable: false },
        { key: 'thu', label: 'الخميس', enable: false },
    ];

    const VistiaTime = [
        { label: "15 ", id: "0" },
        { label: "30 ", id: "1" },
        { label: "60 ", id: "2" },
    ];

    return (
        <>
            <SafeAreaProvider style={{ backgroundColor: COLORS.Main_Color_White }}>
                <View style={{ padding: RFPercentage(3), backgroundColor: COLORS.Main_Color_White, marginBottom: RFPercentage(30) }}>
                    <View>
                        <Text style={{
                            fontFamily: FONT.font_Almarai_Bold,
                            alignSelf: "flex-start",
                            fontSize: scale(17),
                            color: COLORS.Title_Color,
                            marginBottom: scale(8)
                        }}>المواعيد المتاحه</Text>
                        
                        {Flow_one ? (<>

                            <View style={{
                                borderWidth: 1,
                                marginTop: scale(20),
                                borderColor: COLORS.Color_line_free_times
                            }} />
                            <View style={{ alignSelf: "center", alignItems: "center", marginTop: scale(-23) }}>
                                <View style={{ marginVertical: scale(8) }}>
                                    <Correct_Checkbox width={scale(30)} height={scale(30)} />
                                </View>
                                <Text style={{
                                    fontFamily: FONT.font_Almarai_Bold,
                                    alignSelf: "center",
                                    fontSize: scale(14),
                                    color: COLORS.Second_Color_Blue,
                                    marginBottom: scale(8)
                                }}>كشف في العياده</Text>
                            </View>

                        </>) : (<>


                            <View style={{
                                borderWidth: 1,
                                marginTop: scale(25),
                                borderColor: COLORS.Color_line_free_times
                            }} />
                            <View style={{ flexDirection: "row",marginBottom:scale(10), justifyContent: "space-between" }}>
                                <View style={{ alignSelf: "flex-start", alignItems: "center", marginTop: scale(-23) }}>
                                    <View style={{ marginVertical: scale(8), alignItems: "flex-start" }}>
                                        <View style={{ backgroundColor: COLORS.Main_Color_White }}>
                                            <Correct_Checkbox width={scale(30)} height={scale(30)} />
                                        </View>
                                        <Text style={{
                                            fontFamily: FONT.font_Almarai_Bold,
                                            alignSelf: "center",
                                            fontSize: scale(14),
                                            color: COLORS.Second_Color_Blue,
                                            marginBottom: scale(8)
                                        }}>كشف في العياده</Text>
                                    </View>
                                </View>

                                <View style={{ alignSelf: "flex-start", alignItems: "center", marginTop: scale(-23) }}>
                                    <View style={{
                                        marginVertical: scale(8),
                                        alignItems: "flex-end"
                                    }}>
                                        <View style={{ backgroundColor: COLORS.Main_Color_White }}>
                                            <Correct_Checkbox width={scale(30)} height={scale(30)} />
                                        </View>
                                        <Text style={{
                                            fontFamily: FONT.font_Almarai_Bold,
                                            alignSelf: "center",
                                            fontSize: scale(14),
                                            color: COLORS.Second_Color_Blue,
                                            marginBottom: scale(8)
                                        }}>كشف منزلى</Text>
                                    </View>
                                </View>

                            </View>

                        </>)}

                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={days}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: scale(10) }}>
                                        <Text style={{
                                            fontFamily: FONT.font_Almarai_Regular,
                                            fontSize: scale(17),
                                            color: COLORS.Title_Color,
                                        }}>{item.label}</Text>

                                        <ToggleSwitch
                                            isOn={isHomeVisit[item.key]}
                                            onColor={COLORS.Second_Color_Blue}
                                            offColor={COLORS.Color_line_free_times}
                                            size="medium"
                                            onToggle={() => toggleSwitch(item.key)}
                                        />
                                    </View>
                                    {isHomeVisit[item.key] && times[item.key] && (
                                        <>
                                            {times[item.key].map((timeSlot, index) => (
                                                <View key={index} style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: scale(8) }}>
                                                    <View>
                                                        <Text style={{
                                                            fontFamily: FONT.font_Almarai_Regular,
                                                            color: COLORS.From_To_Word_Color, fontSize: scale(14)
                                                        }}>من *</Text>
                                                        <TouchableOpacity onPress={() => showDatePicker('from', item.key, index)} style={{
                                                            backgroundColor: COLORS.Background_TextInputandImage,
                                                            padding: RFPercentage(1), width: scale(135), borderRadius: scale(8)
                                                        }}>
                                                            <Text style={{
                                                                fontFamily: FONT.font_Almarai_Bold, color: COLORS.Time_Color,
                                                                fontSize: scale(14)
                                                            }}>{timeSlot.from}</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View>
                                                        <Text style={{
                                                            fontFamily: FONT.font_Almarai_Regular,
                                                            color: COLORS.From_To_Word_Color, fontSize: scale(14)
                                                        }}>الي *</Text>
                                                        <View style={{ flexDirection: "row" }}>
                                                            <TouchableOpacity onPress={() => showDatePicker('to', item.key, index)}
                                                                style={{
                                                                    backgroundColor: COLORS.Background_TextInputandImage,
                                                                    padding: RFPercentage(1), width: scale(135), borderRadius: scale(8)
                                                                }}>
                                                                <Text style={{
                                                                    fontFamily: FONT.font_Almarai_Bold, color: COLORS.Time_Color,
                                                                    fontSize: scale(14)
                                                                }}>{timeSlot.to}</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity
                                                                onPress={() => addNewTimeSlot(item.key)}
                                                                style={{
                                                                    backgroundColor: COLORS.Background_TextInputandImage,
                                                                    paddingHorizontal: RFPercentage(1), borderRadius: scale(8), marginHorizontal: scale(4)
                                                                }}>
                                                                <Text style={{
                                                                    fontFamily: FONT.font_Almarai_Bold, color: COLORS.Time_Color,
                                                                    fontSize: scale(18)
                                                                }}>+</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                </View>
                                            ))}
                                            <View style={{ marginBottom: RFPercentage(2) }}>
                                                <DropDownPicker
                                                    open={open}
                                                    value={value}
                                                    items={VistiaTime.map(item => ({ label: `${item.label} دقيقة`, value: item.label, key: item.id }))}
                                                    setOpen={setOpen}
                                                    setValue={setValue}
                                                    onChangeValue={(item) => {
                                                        setExaminationDuration(item);
                                                    }}
                                                    labelStyle={{
                                                        fontSize: scale(14),
                                                        fontFamily: FONT.font_Almarai_Regular,
                                                        backgroundColor: COLORS.Background_TextInputandImage,
                                                        borderWidth: 0,
                                                        alignSelf: "center"
                                                    }}
                                                    listItemLabelStyle={{
                                                        fontSize: scale(14),
                                                        justifyContent: "center",
                                                        fontFamily: FONT.font_Almarai_Regular,
                                                        color: COLORS.black,
                                                        borderWidth: 0
                                                    }}
                                                    style={{
                                                        backgroundColor: COLORS.Background_TextInputandImage,
                                                        borderRadius: scale(8),
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        borderWidth: 0,
                                                    }}
                                                    textStyle={{
                                                        alignSelf: "center",
                                                        fontSize: scale(14),
                                                        justifyContent: "center",
                                                        fontFamily: FONT.font_Almarai_Regular,
                                                        color: COLORS.black,
                                                    }}
                                                    listMode='MODAL'
                                                    isRTL={true}
                                                    placeholder=''
                                                />
                                            </View>
                                        </>
                                    )}
                                </View>
                            )}
                            keyExtractor={(item) => item.key}
                        />
                    </View>
                    {isDatePickerVisible && (


                        <DateTimePicker
                            value={selectedDate}
                            mode="time"
                            display="default"
                            onChange={(event, date) => handleConfirm(event, date)}
                        />
                    )}
                </View>
            </SafeAreaProvider>
            <View style={{
                backgroundColor: COLORS.Main_Color_White,
                shadowOffset: { height: 30, width: 100 },
                shadowColor: COLORS.black,
                elevation: 10,
                shadowOpacity: .7,
            }}>
                {/* I know he must go to Home but i if i make that will repeate again because i can't use Apis cause i didn't have access to get token   */}
                <Main_Button Title_Button={"التالي"} confirm={()=>navigation.navigate("Apply_to_Join")}/>
            </View>
        </>
    );
  
};

export default Home_visita;
