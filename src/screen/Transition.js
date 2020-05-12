import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {backgroundColorLight, tintColor} from '../common/theme';

const Transition = ({level, route, navigation}) => {
  if (route.params) {
    level = route.params.level;
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setTimeout(() => {
        navigation.navigate('Level', {level});
      }, 500);
    });

    return unsubscribe;
  }, [level, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{level + 1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColorLight[10],
  },
  text: {
    color: tintColor[10],
    fontSize: 72,
  },
});

export default Transition;
