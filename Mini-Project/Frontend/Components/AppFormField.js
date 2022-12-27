import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import AppTextInput from "./AppTextInput";
import AppErrorMessage from "./AppErrorMessage";
 
const AppFormField =({name,...otherProps})=>{
    return(
<>
<AppTextInput
onBlur={()=>setFieldTouched(name)}

onChangeText={handleChange(name)}
{...otherProps}
/>
<AppErrorMessage visible={touched[name]} error={errors[name]}></AppErrorMessage>
</>
    );
}





export default AppFormField;
