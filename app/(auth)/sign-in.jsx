import { View, Text, ScrollView, Image } from 'react-native'
import React ,{useState} from 'react'
import {images} from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
const SignIn = () => {

  const [form, setForm] = useState({
    email: "",
    password:""
  })
  return (
    <SafeAreaView className = "h-full bg-primary">
      <ScrollView>
        <View className="justify-center w-full h-full px-4 my-6 h">
          <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]"/>
          <Text className="mt-10 text-2xl font-semibold text-white font-psemibold">
            Log in to Aora
          </Text>
          <FormField
            title = "Email"
            value = {form.email}
            handleChangeText={(e)=>setForm({...form,email:e})}
            otherStyles= "mt-7"
            keyboardType = "email-address"
          />
          <FormField
            title = "Password"
            value = {form.password}
            handleChangeText={(e)=>setForm({...form,password:e})}
            otherStyles= "mt-7" 
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn