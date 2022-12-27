// import React from "react";

// import { Image, StyleSheet } from "react-native";

// // import Screen from "./Screens";

// import AppTextInput from "../components/AppTextInput";

// import AppButton from "../components/CoustomBtn";

// // import AppText from "../components/AppText";

// import {Formik} from "formik";

// import * as Yup from "yup";

// import AppErrorMessage from "../components/AppErrorMessage";

 

// const validationSchema=Yup.object().shape({

// email:Yup.string().required().email().label("Email"),

// password:Yup.string().required().min(4).label("password")

 

// })

 

// const LoginScreen1 = () => {

  

//   return (

//     <Screen style={styles.container}>

//       <Image style={styles.logo} source={require("../assets/sign.png")}></Image>

//       <Formik

//         initialValues={{email:'',password:''}}

//         onSubmit={values=>console.log(values)}

//         validationSchema={validationSchema}

//       >

//       {({handleChange,handleSubmit,errors, setFieldTouched, touched})=>(

//         <>

// <AppTextInput

//   autoCapitalize="none"

//   autoCorrect={false}

//   keyboardType="email-address"

//   icon="email"

//   onBlur={()=>setFieldTouched("email")}

//   onChangeText={handleChange("email")}

//   placeholder="Enter email"

// />

//       {/* <AppText style={{color:'red'}}>{errors.email}</AppText> */}

//      {/* { touched.email && <AppErrorMessage error={errors.email}></AppErrorMessage>} */}  

//      {/* the above line can be used  without visible in the APpErrorMessage.js */}

//      <AppErrorMessage visible={touched.email} error={errors.email}></AppErrorMessage>

// <AppTextInput

//   autoCapitalize="none"

//   autoCorrect={false}

//   icon="lock"

//   onBlur={()=>setFieldTouched("password")} 

//   onChangeText={handleChange("password")}

//   placeholder="Enter password"

//   secureTextEntry={true} //secureTextEntry

// />

// {/* <AppText style={{color:'red'}}>{errors.password}</AppText> */}

// {/* { touched.password && <AppErrorMessage error={errors.password}></AppErrorMessage>} */}

 

// <AppErrorMessage error={errors.password} visible={touched.password}></AppErrorMessage>

// <AppButton

//   title="Login"

//   onPress={handleSubmit}

// />

//  </>

//       )}  

//       </Formik>  

 

//     </Screen>

//   );

// };

// const styles = StyleSheet.create({

//   container: {

//     padding: 10,

//   },

//   logo: {

//     height: 80,

//     width: 80,

//     alignSelf: "center",

//     marginTop: 50,

//     marginBottom: 20,

//   },  

// });

// export default LoginScreen1;