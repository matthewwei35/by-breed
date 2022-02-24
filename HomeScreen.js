import { SafeAreaView, FlatList, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { cats, dogs } from './breeds';
import Item from './Item';

const DATA_CATS = cats;
const DATA_DOGS = dogs;

function HomeScreen({ navigation }) {
  return (
      <FlatList
        ref={(list) => flatListRef = list}
        data={DATA_CATS}
        renderItem={({ item, index }) => {
          // console.log(item)
          return <Item title={`${item.breed}`} data={item} navigation={navigation} />
        }}
        keyExtractor={item => {
          return item.breed
        }}
      />
  )
}

export default HomeScreen;
