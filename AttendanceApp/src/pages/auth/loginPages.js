import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import {bg, logos} from '../../assets/images';

const LoginPages = props => {
  return (
    <ImageBackground source={bg} style={{flex: 1, padding: 20}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={logos}
          style={{
            height: 150,
            width: 150,
            borderRadius: 20,
            alignSelf: 'center',
            marginBottom: 100,
          }}
        />
        <TextInput
          style={{
            backgroundColor: '#FFF',
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginBottom: 20,
          }}
          placeholder="Type here name"
        />
        <TextInput
          style={{
            backgroundColor: '#FFF',
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginBottom: 20,
          }}
          placeholder="Type here password"
        />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate('Home')}
          style={{
            backgroundColor: '#FAA83A',
            padding: 15,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{color: '#FFF', fontSize: 16, fontWeight: '600'}}>
            Login
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});

export default LoginPages;
