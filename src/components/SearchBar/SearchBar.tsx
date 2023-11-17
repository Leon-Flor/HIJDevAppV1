import {themeColors} from '@/theme/theme';
import {StyleSheet, TextInput} from 'react-native';
import {View} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import {UserMenu} from '../UserMenu';
import {useActions} from './useActions';

interface props {
  radius?: number;
  onChangeText?: (arg0: string) => void;
}

export const SearchBar = ({radius = 16, onChangeText}: props) => {
  const {handleOpenUserMenu, width} = useActions();
  return (
    <View
      row
      centerV
      spread
      paddingH-16
      paddingV-8
      backgroundColor={themeColors.PRIMARY_BG}
      style={[
        styles.searchBar,
        {
          borderRadius: radius,
        },
      ]}>
      <Icon name="search" size={20} />
      <TextInput
        style={{
          width: width - 16 * 8,
        }}
        placeholder="Busca servicios, categorías ..."
        placeholderTextColor={themeColors.BASE_COLORS.GRAY_0}
        onChangeText={onChangeText}
        selectionColor={themeColors.ACCENT}
        textAlign="left"
      />

      <UserMenu size={32} handlePress={handleOpenUserMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    gap: 8,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 4,
  },
});
