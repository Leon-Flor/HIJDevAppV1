import {Card, View} from 'react-native-ui-lib';
import {Text} from '@react-native-material/core';
import FastImage from 'react-native-fast-image';
import {StyleSheet} from 'react-native';

interface WorkerEntity {
  id: number;
  name: string;
  skills: string;
  img: string;
}

export const WorkerCard = ({name, img}: WorkerEntity) => {
  return (
    <Card>
      <FastImage source={{uri: img}} style={styles.img} />
      <Text>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 320,
  },
});
