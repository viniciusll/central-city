import { View, Text } from 'react-native';

import { styles } from './styles';
import IllustrationSvg from '../../assets/illustration.svg';

export function SignInContent() {
  return (
    <View style={styles.container}>
      <IllustrationSvg height={300} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Partiu?
        </Text>

        <Text style={styles.description}>
          Entre com sua conta e vem ter uma experiência incrível !
        </Text>
      </View>
    </View>
  );
}