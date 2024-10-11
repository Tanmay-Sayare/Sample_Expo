import { Button , StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
        <View style={styles.main}>
        <Text style={styles.title}>Hello</Text>
      </View>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
      },
      main: {
        flex: 1,
        maxWidth: 960,
        marginHorizontal: "auto",
      },
      title: {
        fontSize: 64,
        fontWeight: "bold",
      },
      subtitle: {
        fontSize: 36,
        color: "#38434D",
      },
})
