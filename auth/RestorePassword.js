import React from 'react';
import { View } from 'react-native';
import ForgetPasswordForm from './ForgetPasswordForm';
import stylebasics from '../style/StyleBasics';
import restorePasswordStyles from '../style/RestorePasswordStyles';



const RestorePassword = () => {
    return (
        <View style={stylebasics.container}>
            <ForgetPasswordForm  />
        </View>
    )
}


export default RestorePassword;