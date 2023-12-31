import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList, RootStackScreenProps} from '@/types/stackRoutes';

export enum TabsHomeRoutes {
  HOME = 'HOME',
  EXPLORER = 'EXPLORER',
  MESSAGES = 'MESSAGES',
  PROFILE = 'PROFILE',
}

export type TabsHomeParamList = {
  [TabsHomeRoutes.HOME]: undefined;
  [TabsHomeRoutes.EXPLORER]: undefined;
  [TabsHomeRoutes.MESSAGES]: undefined;
  [TabsHomeRoutes.PROFILE]: undefined;
};

export type TabsHomeScreenProps<T extends keyof TabsHomeParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabsHomeParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
