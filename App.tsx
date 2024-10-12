import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from './Component/Card'
import axios from 'axios'

const App = () => {
  const [productdata, setProduct] = useState([])

  const ApiData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      setProduct(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    ApiData()
  }, [])

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Product List</Text>
      <ScrollView>
        {productdata.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </ScrollView>
    </View>
  )
}

export default App

