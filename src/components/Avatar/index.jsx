import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

export function Avatar({ ...rest }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        {...rest}
      />
    </View>
  );
}