import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RFPercentage } from 'react-native-responsive-fontsize';
import TextInput_Component from '../../Component/TextInput_Component';
import { COLORS, FONT } from '../../Constants/themes';
import Choose_box_component from '../../Component/Choose_box_component';
import { scale } from 'react-native-size-matters';
import Upload_Image from '../../Component/Upload_Image';
import Checkboxs_Compnent from '../../Component/Checkboxs_Compnent';
import Main_Button from '../../Component/Main_Button';
import Upload_File from '../../Component/Upload_File';
import { useFormik } from 'formik';
import { Sign_up_initial_values } from '../../Forms/Initial_Values';
import { Signupschemaformik } from '../../Forms/Schema';
import { useDispatch, useSelector } from 'react-redux';
import { get_All_Specializations } from '../../Redux/Reducers/Get_Specializations';
import { get_allgovernments } from '../../Redux/Reducers/Get_Egypt_Governments';
import { Cities, Governments } from '../../Dummy/Util';
import { useNavigation } from '@react-navigation/native';
import { post_doctor } from '../../Redux/Reducers/Post_Inform_Doctor';
import Confirmation_Dialog from '../../Component/Confirmation_Dialog';




const Apply_to_Join = () => {


    // useEffect(() => {
    //     dispatch(get_allgovernments());
    // }, [dispatch]);
    // const { allgovernments } = useSelector((state) => state.governments);


    // console.log(allgovernments, "app box gov ")
    const navigation = useNavigation();


    const [confirmationVisible, setConfirmationVisible] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_All_Specializations());
    }, [dispatch]);
    const { allspecializations } = useSelector((state) => state.specializations);







    const [image, setImage] = useState(null);
    const [file, setfile] = useState(null);
    const [uploadedFileName, setUploadedFileName] = useState('');

   


    const {
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
    } = useFormik({
        validationSchema: Signupschemaformik,
        initialValues: Sign_up_initial_values,
        onSubmit: async (values) => {
            try {
                const response = await dispatch(
                    post_doctor({
                        first_name: values.first_name,
                        last_name: values.last_name,
                        name: values.first_name + values.last_name,
                        image: image.uri,
                        specialization: values.specialization,
                        governorate: values.governorate,
                        city: values.city,
                        address: values.address,
                        certificate: file,
                        phoneNumber: values.phoneNumber,
                        email: values.email,
                        inClinic: values.inClinic,
                        atHome: values.atHome,
                        pushToken: "catonkeyboard",
                    })
                ).unwrap();

                if (!response.error && Object.keys(errors).length === 0) {
                    setConfirmationVisible(true); 
                } else {
                    alert('Please check your input and try again');
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        },
    });
    const [atHome, setAtHome] = useState(false);
    const [inClinic, setInClinic] = useState(false);

    const handleCheckbox = (type) => {
        if (type === 'atHome') {
            setAtHome(prevState => !prevState);
        } else if (type === 'inClinic') {
            setInClinic(prevState => !prevState);
        }
    };


    const handleFile = (selectedfile) => {
        setfile(selectedfile);
        setUploadedFileName(selectedfile.name);
    };

    const handleImageSelected = (selectedImage) => {
        setImage(selectedImage);
    };

    // const handleConfirmationClose = () => {
    //     setConfirmationVisible(false);
    //     navigation.navigate('Home');
    //   };


    doc = [{
        doctors: [
            {
                name: "new doctor",
                phoneNumber: "+201111111111",
                specialization: [
                    {
                        _id: "4Lu285qXypojRG6QD",
                        name: "قلب و أوعية دموية"
                    }
                ],
                isVerified: true,
                isBlocked: false,
                id: "65c373f59e6a9dac4f9df17f"
            }
        ],
        results: "1",
        totalResults: "1",
        page: "1",
        totalPages: "1"
    },]

    const [data, setData] = useState(doc);
    return (
        <>
            <SafeAreaProvider style={{ backgroundColor: COLORS.Main_Color_White }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={{ padding: RFPercentage(3) }}>
                            <Text style={{
                                fontFamily: FONT.font_Almarai_Bold,
                                alignSelf: "flex-start",
                                fontSize: scale(17),
                                color: COLORS.Title_Color
                            }}>طلب انضمام الى كانيولا</Text>

                            <Upload_Image onImageSelected={handleImageSelected} />

                            <TextInput_Component
                                Title={"الاسم الاول"}
                                value={values.first_name}
                                onChangeText={handleChange('first_name')}
                                errors={errors.first_name}
                                touched={touched.first_name}
                            />
                            <TextInput_Component Title={"الاسم الاخير"}
                                value={values.last_name}
                                onChangeText={handleChange('last_name')}
                                errors={errors.last_name}
                                touched={touched.last_name}
                            />
                            <Choose_box_component Title={"التخصص"}
                                specializations={allspecializations.specializations}
                                value={values.specialization}
                                onChangeText={handleChange('specialization')}
                                errors={errors.specialization}
                                touched={touched.specialization}
                            />
                            <TextInput_Component Title={"رقم الموبايل"}
                                value={values.phoneNumber}
                                onChangeText={handleChange('phoneNumber')}
                                errors={errors.phoneNumber}
                                touched={touched.phoneNumber}
                            />
                            <TextInput_Component Title={"البريد الالكترونى"}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                errors={errors.email}
                                touched={touched.email}
                            />
                            <Choose_box_component Title={"المحافظة"}
                                specializations={Governments}
                                value={values.governorate}
                                onChangeText={handleChange('governorate')}
                                errors={errors.governorate}
                                touched={touched.governorate} />
                            <Choose_box_component Title={"المنطقة"}

                                specializations={Cities}
                                value={values.city}
                                onChangeText={handleChange('city')}
                                errors={errors.city}
                                touched={touched.city}
                            />
                            <TextInput_Component Title={"العنوان"}
                                value={values.address}
                                onChangeText={handleChange('address')}
                                errors={errors.address}
                                touched={touched.address}
                            />

                            <View  >
                                <Text style={{
                                    fontFamily: FONT.font_Almarai_Regular,
                                    alignSelf: "flex-start",
                                    fontSize: scale(16),
                                    color: COLORS.Title_Color
                                }}>الإتاحيه للكشف</Text>


                                <Checkboxs_Compnent Type_visita={"كشف منزلى"} atHome={atHome} handleCheckbox={() => handleCheckbox('atHome')} />
                                <Checkboxs_Compnent Type_visita={"كشف في العياده"} inClinic={inClinic} handleCheckbox={() => handleCheckbox('inClinic')} />

                            </View>

                            <View  >
                                <Text style={{
                                    fontFamily: FONT.font_Almarai_Regular,
                                    alignSelf: "flex-start",
                                    fontSize: scale(16),
                                    color: COLORS.Title_Color
                                }}>شهادة مزاولة المهنه</Text>



                                <Upload_File onFileSelected={handleFile} />
                                {file && <Text style={{
                                    fontFamily: FONT.font_Almarai_Regular,
                                    alignSelf: "center",
                                    fontSize: scale(16),
                                    color: COLORS.Title_Color
                                }} >{uploadedFileName} Uploaded</Text>}

                            </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />

            </SafeAreaProvider>

            <View style={{
                backgroundColor: COLORS.Main_Color_White,
                shadowOffset: { height: 30, width: 100 },
                shadowColor: COLORS.black,
                elevation: 10,
                shadowOpacity: .7,
            }}>
                <Main_Button Title_Button={"ارسال"} confirm={()=>navigation.navigate("Confirmation_Dialog")} />

{/* handleSubmit */}

            </View>
        </>
    );
};

export default Apply_to_Join;


