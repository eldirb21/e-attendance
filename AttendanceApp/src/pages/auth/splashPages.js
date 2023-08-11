import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {logos} from '../../assets/images';

const SplashPages = props => {
  useEffect(() => {
    let timer = setTimeout(() => {
      props.navigation.navigate('LoginPages');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.logos} source={logos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  logos: {
    borderRadius: 20,
  },
});

export default SplashPages;
