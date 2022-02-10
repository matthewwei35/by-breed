import { View, StyleSheet, Text } from 'react-native';

const Item = ({ title, data }) => {

  const keys = Object.keys(data)

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      {keys.map((key) => <Text>{key}: {data[key]}</Text>)}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  title: {
    fontSize: 32,
  },
});

export default Item;
