import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {avatar} from '../../assets/images';

const HomePages = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#FAA83A',
          height: '40%',
          borderBottomLeftRadius: 150,
          borderBottomRightRadius: 150,
          padding: 15,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: 100, width: 100, borderRadius: 100}}
            source={avatar}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#FFF', fontSize: 16, fontWeight: '600'}}>
              Shaheen Uddin Ahmad
            </Text>
            <Text style={{color: '#FFF', fontSize: 14, marginTop: 5}}>
              Artificial Soft
            </Text>
          </View>
        </View>
        <View
          style={{
            alignSelf: 'center',
            backgroundColor: '#FFF',
            // padding: 15,
            height: 40,
            paddingHorizontal: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            borderWidth: 1,
          }}>
          <Text style={{color: '#FAA83A', fontSize: 14}}>Employee</Text>
        </View>
      </View>
      <View>
        {[].map((item, index) => {
          return (
            <View>
              <Text>1</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomePages;
