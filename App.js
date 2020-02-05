/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  // TouchableHighlight,
} from 'react-native';
// import Wave from 'react-native-waveview';

import ItemButton from './ItemButton';
const iconsArray = ['bookmark', 'heart', 'lock', 'pencil'];
const imageStores = {
  lock: require('./assets/lock.png'),
  heart: require('./assets/heart.png'),
  bookmark: require('./assets/bookmark.png'),
  pencil: require('./assets/pencil.png'),
};

const App = () => {
  const [selectedImage, setSelectedImage] = useState(iconsArray[0]);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.SafeAreaViewStyle}>
        <View style={styles.mainImageWrapper}>
          <Image source={imageStores[selectedImage]} style={styles.mainImage} />
          <Image source={imageStores[selectedImage]} style={styles.mainImage} />
          <Image source={imageStores[selectedImage]} style={styles.mainImage} />
        </View>
        <View style={styles.iconsScrollViewWrapper}>
          <ScrollView horizontal={true}>
            {iconsArray.map(itemName => (
              <ItemButton
                name={itemName}
                onPress={() => {
                  setSelectedImage(itemName);
                }}
                selectedImage={selectedImage}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  mainImage: {width: 100, height: 100, margin: 10},
  SafeAreaViewStyle: {flex: 1},
  iconsScrollViewWrapper: {height: 100},
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
  },
  wave: {
    width: 100,
    aspectRatio: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  waveBall: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
    overflow: 'hidden',
  },
});

export default App;
