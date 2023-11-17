import {CardGlass, ScreenCarded, SearchBar} from '@/components';
import {themeColors, themeStyles} from '@/theme/theme';
import {Text} from '@react-native-material/core';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import {View} from 'react-native-ui-lib';

export const HomeScreen = () => {
  return (
    <View flex padding-16 backgroundColor={themeColors.PRIMARY}>
      <StatusBar
        backgroundColor={themeColors.PRIMARY}
        barStyle={Platform.OS === 'ios' ? 'default' : 'light-content'}
      />
      <SearchBar radius={100} />
      <View backgroundColor="red" padding-16 flex marginT-16></View>
    </View>
    // <ScreenCarded
    //   header={
    //     <View padding-16 spread left style={styles.headerText}>
    //       <Text style={themeStyles.subTitle} color={themeColors.PRIMARY_BG}>
    //         Hi León
    //       </Text>
    //       <Text style={themeStyles.title} color={themeColors.PRIMARY_BG}>
    //         Qué servicio contrataras hoy?
    //       </Text>
    //       <View center width="100%">
    //         <SearchBar />
    //       </View>
    //     </View>
    //   }
    //   content={<View padding-16></View>}
    // />
  );
};

const styles = StyleSheet.create({
  headerText: {
    display: 'flex',
    gap: 4,
    overflow: 'hidden',
  },
});
