import {useState} from 'react';
import {useWindowDimensions} from 'react-native';

export const useActions = () => {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const {width} = useWindowDimensions();

  const handleOpenUserMenu = () => {
    setOpenUserMenu(!openUserMenu);
  };

  return {
    width,
    openUserMenu,
    handleOpenUserMenu,
  };
};
