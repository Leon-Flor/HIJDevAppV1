import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum RootStackRoutes {
  TABS = 'TABS',
}

export type RootStackParamList = {
  [RootStackRoutes.TABS]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
