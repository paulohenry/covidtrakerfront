import React, {useState, useEffect} from 'react';
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const CheckBox = ({ value, selected, disable, onPress, style, size = 30, color = 'rgba(2,157,100, 0.7)', text = '', ...props}) => {
    return(
    <TouchableOpacity
    style={[styles.checkBox, style]} 
    onPress={onPress} 
    {...props}>
        {
            //se disable for true entao o check tem que estar vazio
            !disable ? 
            <Icon 
                size={size}
                color={color}
                name='check-box'
            /> :
            <Icon 
                size={size}
                color={color}
                name='check-box-outline-blank'
            />
        }
    </TouchableOpacity>

    )
}

export default CheckBox;