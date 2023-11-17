import {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native-ui-lib';

interface props {
  children: ReactNode;
}

export const CardGlass = ({children}: props) => {
  return (
    <View style={styles.mainCard} padding-20 br20>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});
