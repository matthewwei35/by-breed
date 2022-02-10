import { View, StyleSheet, Text } from 'react-native';

const Item = ({ title, data }) => {

  const keys = Object.keys(data)

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      {keys.filter((name) => name != 'breed').map((key) => {
        return (
          <View style={styles.details}>
            <Text>{key}: {data[key]}</Text>
            <View style={styles.parent}>
              <View style={[styles.child, {width: data[key] / 5 * 100}]}></View>
            </View>
          </View>
        )
      })}
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
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  parent: {
    backgroundColor: 'blue',
    width: 100,
    alignSelf: 'center'
  },
  child: {
    backgroundColor: 'grey',
    height: 10,
    width: 100
  }
});

export default Item;
