import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';

import { DetailsRecipe } from '../screens/DetailsRecipe';
import { Favorite } from '../screens/Favorites';

import { Ionicons } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#121212',


        tabBarStyle: {
          backgroundColor: '#ffff',
          borderTopWidth: 0
        }
      }}

    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return focused
              ? <Ionicons name='home' color='#000' size={size} />
              : <Ionicons name='home-outline' color={color} size={size} />;
          }
        }}
      />
      <Tab.Screen
        name="DetailsRecipe"
        component={DetailsRecipe}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return focused
              ? <Ionicons name='heart' color='#ff4143' size={size} />
              : <Ionicons name='heart-outline' color={color} size={size} />;
          }
        }}
      />
    </Tab.Navigator>
  )
}

