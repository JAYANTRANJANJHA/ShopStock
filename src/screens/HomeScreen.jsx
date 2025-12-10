import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import AllItems from './AllItems'
import CreateScreen from './CreateScreen'

const data = [
  { id: 1, name: "wheat", stock: 5, unit: "kg" },
  { id: 2, name: "rice", stock: 10, unit: "kg" },
  { id: 3, name: "barley", stock: 7, unit: "kg" },
  { id: 4, name: "corn", stock: 12, unit: "kg" },
  { id: 5, name: "oats", stock: 4, unit: "kg" },
  { id: 6, name: "millet", stock: 9, unit: "kg" },
  { id: 7, name: "soybean", stock: 6, unit: "kg" },
  { id: 8, name: "lentils", stock: 15, unit: "kg" },
  { id: 9, name: "peas", stock: 8, unit: "kg" },
  { id: 10, name: "quinoa", stock: 3, unit: "kg" }
];

const HomeScreen = () => {

  const [view, setView] = useState(0)

  return (
    <View style={styles.container}>

      <Text style={styles.title}>DashBoard</Text>

      <View style={styles.buttonContainer}>

        <Pressable style={[styles.btn, view === 0 ? { backgroundColor: "green" } : null]} onPress={() => setView(0)}>
          <Text style={[styles.btnText, view === 0 ? { color: "white" } : null]}>
            All Items
          </Text>
        </Pressable>

        <Pressable style={[styles.btn, view === 1 ? { backgroundColor: "green" } : null]} onPress={() => setView(1)}>
          <Text style={[styles.btnText, view === 1 ? { color: "white" } : null]} >
            Low Stock
          </Text>
        </Pressable>

        <Pressable style={[styles.btn, view === 2 ? { backgroundColor: "green" } : null]} onPress={() => setView(2)}>
          <Text style={[styles.btnText, view === 2 ? { color: "white" } : null]}>
            Create
          </Text>
        </Pressable>

      </View>
      {view === 0 && <AllItems data={data}/>}
      {view === 1 && <AllItems data={data.filter(item=>item.stock<8)} />}
      {view === 2 && <CreateScreen />}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: "4%",
    backgroundColor: "#ffffff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",

  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 12,
  },
  btn: {
    paddingVertical: 4,
    paddingHorizontal: 9,
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: "green",
  },
  btnText: {
    color: "green",
    fontSize: 12,

  }

})