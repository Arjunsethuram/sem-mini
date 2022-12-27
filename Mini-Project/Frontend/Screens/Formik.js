
import React from 'react';
import { Button, TextInput, View ,StyleSheet,Text,Image,ImageBackground} from 'react-native';
import { Formik } from 'formik';
import AppTextInput from '../Components/AppTextInput';
import * as yup from 'yup'
import Axios from "axios"
import image from '../assets/cbum.webp'

const ValidationSchema = yup.object().shape({
  fname:yup
     .string()
     .required('Name is Required'),
  lname:yup
     .string()
     .required('Name is Required'),   
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});
  const RegisterFormik = ()=> {
  return(
    <>
    <ImageBackground style={styles.bg} source={image} resizeMode="cover" blurRadius={5} >
  <Formik
  
    initialValues={{fname:'',lname:'' ,email: '',password:'' }}
    validationSchema={ValidationSchema}
    onSubmit={(values)=>Axios.post("http://localhost:5000/samp/register",values).then((res)=>{alert("Register Successfuly")}).catch((error)=>console.log(error))}
  >
    {({ handleChange,  handleSubmit, values,errors }) => (
      <View style={styles.container}>
        <Image style={{height:"100px",width:"100px",marginLeft:"35%",backgroundColor:"deepskyblue",borderRadius:"40px"}} source={require('../assets/logo-2.png')}></Image>
        <Text style={{fontSize:"2rem",fontWeight:"600",color:"white",marginLeft:"35%"}}>SignUp</Text> 
        
        <AppTextInput icon='account'
         placeholder=" First Name"
          onChangeText={handleChange('fname')}
          value={values.fname}
        />
        {errors.fname ? <Text style={{color:"red",textAlign:"center"}}>{errors.fname}</Text>:null}
         <AppTextInput icon='account'
         placeholder=" Last Name"
          onChangeText={handleChange('lname')}
          value={values.lname}
        />
        {errors.lname ? <Text style={{color:"red",textAlign:"center"}}>{errors.lname}</Text>:null}
        <AppTextInput icon='email'
         placeholder="Enter The Email"
          onChangeText={handleChange('email')}
          value={values.email}
        />
         {errors.email ? <Text style={{color:"red",textAlign:"center"}}>{errors.email}</Text>:null}
        <AppTextInput icon='lock'
         placeholder="Enter The Password"
          onChangeText={handleChange('password')}
          value={values.password}
        />
         {errors.password ? <Text style={{color:"red",textAlign:"center"}}>{errors.password}</Text>:null}
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
  </ImageBackground>
  </>
)
    };
    const styles = StyleSheet.create({
      container :{
          flex: 1,
          backgroundColor:"light-red",
          justifyContent:'center',
          alignContent:'center',
          borderRadius:'5px'

          

      },
      bg:{
        flex: 1,
        justifyContent: "flex-end",
        paddingTop: 20,
    }
  })
  
    export default RegisterFormik;