import {themeColors} from '@/theme/theme';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

interface props {
  size?: number;
  handlePress?: () => void;
}

export const UserMenu = ({size = 16, handlePress}: props) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.container,
        {
          width: size,
          height: size,
        },
      ]}>
      <FastImage
        resizeMode="cover"
        source={{
          uri: 'https://thumbs.dreamstime.com/b/reparador-multi-armado-del-constructor-118060104.jpg',
        }}
        style={styles.img}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    border: `solid ${themeColors.ACCENT} 2px`,
    overflow: 'hidden',
  },
  img: {
    flex: 1,
  },
});
