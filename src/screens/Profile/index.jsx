import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

import { ProfileHeader } from '../../components/ProfileHeader';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { ButtonSetup } from '../../components/ButtonSetup';

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Profile() {
  const navigation = useNavigation();

  async function handleLogout() {
    navigation.navigate('SignIn');
  };

  const setup = [
    {
      id: '1',
      name: 'Mouse',
      description: 'Razer Deathadder Essential: 6400 DPI',
      userId: '1',
    },
    {
      id: '2',
      name: 'Keyboard',
      description: 'Razer Blackwidow V3 Pro',
      userId: '1',
    },
    {
      id: '3',
      name: 'Headphones',
      description: 'Razer Kraken X',
      userId: '1',
    },
    {
      id: '4',
      name: 'Monitor',
      description: 'AOC Hero 24',
      userId: '1',
    },
    {
      id: '5',
      name: 'Processor',
      description: 'Intel Core i7-8700K',
      userId: '1',
    },
    {
      id: '6',
      name: 'Motherboard',
      description: 'ASUS TUF Gaming - X570-Plus',
      userId: '1',
    },
    {
      id: '7',
      name: 'Video card',
      description: 'Nvidia GeForce GTX 1650 OC',
      userId: '1',
    },
    {
      id: '8',
      name: 'Ram',
      description: 'Corsair Vengeance 16GB',
      userId: '1',
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <ProfileHeader />

      <View style={styles.content}>
        <View style={styles.profile}>
          <Avatar
            source={{ uri: 'https://github.com/viniciusll.png' }}
          />

          <Text style={styles.name}>
            Vinicius Martins
          </Text>

          <View style={styles.email}>
            <Feather name="mail" color={theme.colors.secondary} size={18} />
            <Text style={styles.emailText}>
              viniciuslemosmartins1@gmail.com
            </Text>
          </View>
        </View>

        <View style={styles.about}>
          <View style={styles.info}>
            <Feather
              name="user"
              size={34}
              color={theme.colors.note}
            />
            <Text style={styles.label}>
              Nome
            </Text>
            <Text style={styles.text}>
              Vinicius
            </Text>
          </View>

          <View style={styles.info}>
            <Feather
              name="heart"
              size={34}
              color={theme.colors.note}
            />
            <Text style={styles.label}>
              Sobrenome
            </Text>
            <Text style={styles.text}>
              Martins
            </Text>
          </View>
        </View>

        <View style={styles.setup}>
          <MaterialIcons 
            name="computer" 
            size={20} 
            color={theme.colors.secondary}
          />
          <Text style={styles.setupText}>
            Setup
          </Text>
        </View>
        <View style={styles.setupItems}>
            {setup.map(item => (
              <ButtonSetup
                title={item.name}
                description={item.description}
                style={{ marginBottom: 10 }}
                key={item.id}
              />
            ))}
          </View>

        <Button
          title="Desconectar"
          icon="power"
          onPress={handleLogout}
        />
      </View>
    </ScrollView>
  );
}