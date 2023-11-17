import {RootStackParamList, RootStackRoutes} from '@/types/StackRoutes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabsNavigation} from './TabsNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();
export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={RootStackRoutes.TABS} component={TabsNavigation} />
    </Stack.Navigator>
  );
};
