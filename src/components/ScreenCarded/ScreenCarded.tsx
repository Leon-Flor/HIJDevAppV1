import {themeColors} from '@/theme/theme';
import {StyleSheet} from 'react-native';
import {View} from 'react-native-ui-lib';

interface props {
  header: JSX.Element;
  content: JSX.Element;
}

export const ScreenCarded = ({header, content}: props) => {
  return (
    <View flex backgroundColor={themeColors.PRIMARY}>
      <View>{header}</View>
      <View
        flex
        backgroundColor={themeColors.PRIMARY_BG}
        style={styles.contentMain}>
        {content}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentMain: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
