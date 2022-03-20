import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function ButtonSetup({ title, description, style, ...rest }) {
    return (
        <TouchableOpacity style={[styles.container, style]} activeOpacity={.7} {...rest}>
            <Text style={styles.text}>
                {title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
        </TouchableOpacity>
    );
};