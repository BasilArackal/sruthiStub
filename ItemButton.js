import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const ItemButton = ({name, onPress, selectedImage}) => {
  const imageStores = {
    lock: require('./assets/lock.png'),
    heart: require('./assets/heart.png'),
    bookmark: require('./assets/bookmark.png'),
    pencil: require('./assets/pencil.png'),
  };

  const imageContainerStyle = {
    ...styles.imageContainer,
    backgroundColor: selectedImage === name ? 'gray' : 'white',
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchableWrapper}>
      <View style={imageContainerStyle}>
        <Image source={imageStores[name]} style={styles.imageStyle} />
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {width: 50, height: 50},
  touchableWrapper: {width: 110},
});

export default ItemButton;
