import {FlatList} from 'react-native';
import {WorkerCard} from './WorkerCard';

export const WorkersScreen = () => {
  return (
    <FlatList
      renderItem={({item}) => <WorkerCard {...item} />}
      data={[
        {
          id: 1,
          name: 'León',
          skills: 'sdsd',
          img: 'sdsdsd',
        },
      ]}
    />
  );
};
