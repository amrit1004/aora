import { View, Text, ScrollView, Image } from 'react-native'
import React ,{useState} from 'react'
import {images} from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    email: "",
    password:""
  })
  const submit = ()=>{
    
  }
  return (
    <SafeAreaView className = "h-full bg-primary">
      <ScrollView>
        <View className="justify-center w-full  px-4 my-6  min-h-[83vh]">
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
        <CustomButton
         title="Sign In"
         handlePress={submit}
         containerStyles="mt-7"
         isLoading={isSubmitting}
        />
        <View className="flex-row justify-center gap-2 pt-5">
          <Text className="text-lg text-gray-100 font-pregular">
            Don't have account?
          </Text>
          <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Signup
            </Link>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn