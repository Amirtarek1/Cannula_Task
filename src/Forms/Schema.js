import * as Yup from 'yup';



const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const includeDigRegExp = /([0-9]+)/;
const includeCharRegExp = /([A-z]+)/;
const EmailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



export const Signupschemaformik = Yup.object().shape({
  first_name: Yup.string().trim().required(" برجاء ادخال الاسم الاول"),
  last_name: Yup.string().trim().required(" برجاء ادخال الاسم الاخير"),
  email: Yup.string().trim().min(8, 'برجاء ادخال بريد الكتروني صحيح').required('برجاء ادخال بريد الكتروني ').matches(EmailReg, 'برجاء ادخال بريد الكتروني صحيح'),
  phoneNumber: Yup.string().trim().min(8, 'برجاء ادخال رقم الموبايل صحيح ').required('برجاء ادخال رقم الموبايل ').matches(phoneRegExp, 'برجاء ادخال رقم الموبايل صحيح '),
  specialization:Yup.string().trim().required(" برجاء اختيار التخصص"),
  governorate: Yup.string().trim().required(" برجاء اختيار المحافظة"),
  city: Yup.string().trim().required(" برجاء اختيار المنطقة"),
  address: Yup.string().trim().required(" برجاء ادخال العنوان"),
  image: "",
  certificate: "",
  inClinic: null,
  atHome: null,
});


export const validationSchema = Yup.object().shape({
  password: Yup.string().required(" برجاء ادخال الرقم السري")
      .min(8, 'الرقم السري يجب أن يكون 8 أحرف على الأقل')
      .required('الرقم السري مطلوب'),
  passwordConfirmation: Yup.string().required(" برجاء ادخال تاكيد الرقم السري")
      .oneOf([Yup.ref('password'), null], 'تأكيد الرقم السري لا يتطابق')
      .required('تأكيد الرقم السري مطلوب')
});

//   // name:first_name+last_name,   pushToken: "catonkeyboard",

