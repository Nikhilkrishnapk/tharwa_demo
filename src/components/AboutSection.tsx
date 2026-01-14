import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';

const AboutSection = ({ onOpenModal }) => {
  const { width, height } = Dimensions.get('window');

  const language = useSelector(selectLanguage);
  const isArabic = language === 'Arabic';

  const [show, setShow] = useState(false);

  return (
    <Pressable onPress={onOpenModal} style={styles.container}>
      <View
        style={[
          isArabic ? styles.wrapperArabic : styles.wrapper,
          { padding: width * 0.05, width: width * 0.9 },
        ]}
      >
        <Text style={isArabic && { textAlign: 'right' }}>
          {isArabic
            ? ' نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حق البشرية، فلا أحد يرفض أو'
            : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum repe'}
        </Text>
        <View>
          <Pressable>
            <Image source={require('../../assets/arrow_key_down.png')} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginVertical: 10,
    borderRadius: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  ///////////////////////////////////////////
  /////STYLE, BASED ON LANGUAGE {ARABIC}/////
  ///////////////////////////////////////////

  wrapperArabic: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    borderRadius: 20,
  },
});

export default AboutSection;
