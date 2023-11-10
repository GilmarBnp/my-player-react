import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens
import AudioList from '../screens/AudioList';
import Player from '../screens/Player';
import PlayerList from '../screens/PlayerList';
//icons
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='AudioList' component={AudioList} 
      options={{tabBarIcon: ({ color, size }) => {return <MaterialIcons name="headset" size={size} color={color} /> }}}/>
      <Tab.Screen name='Player' component={Player} 
      options={{tabBarIcon: ({ color, size }) => {return <Ionicons name="musical-notes-sharp" size={size} color={color}  />}}}/>
      <Tab.Screen name='PlayerList' component={PlayerList}
      options={{tabBarIcon: ({ color, size }) => {return <MaterialIcons name="queue-music" size={size} color={color} />}}}/>
    </Tab.Navigator>
  )
}
export default AppNavigator
