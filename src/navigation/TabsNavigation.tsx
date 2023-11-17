import {HomeScreen} from '@/screens/Home';
import {TabsHomeParamList, TabsHomeRoutes} from '@/types/tabRoutes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';

const Tabs = createBottomTabNavigator<TabsHomeParamList>();

export const TabsNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name={TabsHomeRoutes.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="home" size={24} />,
        }}
      />
    </Tabs.Navigator>
  );
};
