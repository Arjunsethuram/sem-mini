import React from 'react';

import { StyleSheet } from 'react-native';

import AppText1 from './AppTextInput';

 

const AppErrorMessage = ({error,visible}) => {

    if(!visible || !error){

         return null;   

    }

    return (

            <AppText1 style={styles.text}>{error}</AppText1>    

    );

}
export default AppErrorMessage;