import { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const CreateScreen = ({ data = [], setdata = () => {} }) => {
  const [itemName, setitemName] = useState('')
  const [stockAmt, setstockAmt] = useState('')
  const [isEdit, setisEdit] = useState(false)
  const [editItemId, seteditItemId] = useState(null)

  const addItemHandler = () => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: Number(stockAmt) || 0
    }
    setdata(prev => [...prev, newItem])
    setitemName('')
    setstockAmt('')
    setisEdit(false)
    seteditItemId(null)
  }

  const deleteItemHandler = (id) => {
    setdata(prev => prev.filter((item) => item.id !== id))
  }

  const editItemHandler = (item) => {
    setisEdit(true)
    setitemName(item.name)
    setstockAmt(String(item.stock))
    seteditItemId(item.id)
  }

  const updateItemHandler = () => {
    setdata(prev => prev.map((item) =>
      item.id === editItemId ? { ...item, name: itemName, stock: Number(stockAmt) || 0 } : item
    ))
    setitemName('')
    setstockAmt('')
    setisEdit(false)
    seteditItemId(null)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Enter an Item name'
        placeholderTextColor="#999"
        value={itemName}
        onChangeText={setitemName}
      />

      <TextInput
        style={styles.input}
        placeholder='Enter stock amount'
        placeholderTextColor="#999"
        value={stockAmt}
        keyboardType="numeric"
        onChangeText={setstockAmt}
      />

      <Pressable style={styles.addbutton} onPress={() => (isEdit ? updateItemHandler() : addItemHandler())}>
        <Text style={styles.btnText}>{isEdit ? 'Edit Item' : 'Add New Item'}</Text>
      </Pressable>

      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Stock Items</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer, { backgroundColor: item.stock < 8 ? "#FFCCCC" : "#D7F6BFFF" }]}>
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={{ flexDirection: "row", gap: 20 }}>
                <Text style={styles.itemText}>{item.stock}</Text>

                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>

                <Pressable onPress={() => deleteItemHandler(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  container: {
    paddingVertical: "4%",
    gap: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#D7F6BFFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  addbutton: {
    borderWidth: 1.5,
    borderColor: "#CABFEEFF",
    backgroundColor: "#CABFEEFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 7,
  },
  btnText: {
    color: "white",
    fontWeight: "500",
    fontSize: 14,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontWeight: "500",
    fontSize: 14,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
  },
  itemText: {
    fontWeight: "400",
    fontSize: 16,
  },
})