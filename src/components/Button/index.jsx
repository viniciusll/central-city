import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../styles/theme';


export function Button({ title, icon, style, ...rest }) {

  return (
    <TouchableOpacity style={[styles.container, style]} activeOpacity={.7} {...rest}>
      <SimpleLineIcons
        name={icon}
        size={30}
        color={theme.colors.secondary}
      />

      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}