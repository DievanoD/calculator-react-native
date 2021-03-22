import React from 'react';
import { TouchableOpacity, Text } from "react-native";

import styles from './touchableOpacity';

const TouchableOpacityComponent = ({ title, clickBtn }) => {
    let btnCustomStyle, btnCustomText;
    switch (title) {
        case 'C':
            btnCustomStyle = styles.clearBtn;
            btnCustomText = styles.whiteText;
            break;
        case '=':
            btnCustomStyle = styles.equalsBtn;
            btnCustomText = styles.whiteText;
            break;
        default:
            btnCustomStyle = ''
            btnCustomText = '';
            break;
    }
    return (
        (title === '')
            ?
            <TouchableOpacity style={styles.empty} disabled>
                <Text style={styles.btnText}>{title}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={[styles.btn, btnCustomStyle]} onPress={clickBtn}>
                <Text style={[styles.btnText, btnCustomText]}>{title}</Text>
            </TouchableOpacity>
    );
}

export default TouchableOpacityComponent;