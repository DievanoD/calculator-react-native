import React from 'react';
import { TouchableOpacity, Text } from "react-native";

import styles from './touchableOpacity';

const TouchableOpacityComponent = ({ title, clickBtn }) => {
    return (
        (title === '')
            ?
            <TouchableOpacity style={styles.empty} disabled>
                <Text style={styles.btnText}>{title}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.btn} onPress={clickBtn}>
                <Text style={styles.btnText}>{title}</Text>
            </TouchableOpacity>
    );
}

export default TouchableOpacityComponent;