import { View, Text } from 'react-native'
import React from 'react'
import { Tabs,Redirect } from 'expo-router'
const Tabslayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='home'/>
    </Tabs>
  )
}

export default Tabslayout