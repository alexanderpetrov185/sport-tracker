import * as Splash from 'expo-splash-screen'
import {View, Text } from 'react-native'
import React, { createContext, Dispatch, FC, SetStateAction, PropsWithChildren } from 'react'
import { IUser } from '@/types/user.interface'

export type TypeUserState = IUser | null

interface IContext {
    user: IUser
    setUser: Dispatch<SetStateAction<TypeUserState>>
}

export const AuthContext = createContext({} as IContext)

Splash.preventAutoHideAsync() 

const AuthProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <View>
      <Text>AuthProvider</Text>
    </View>
  )
}

export default AuthProvider