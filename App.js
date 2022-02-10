import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { cats, dogs } from './breeds';
import Item from './Item';

const DATA_CATS = cats;
const DATA_DOGS = dogs;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={(list) => flatListRef = list}
        data={DATA_CATS}
        renderItem={({ item, index, data }) => {
          console.log(item)
          return <Item title={`${index} ${item.breed}`} data={item} />
        }}
        keyExtractor={item => {
          return item.breed
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
});
