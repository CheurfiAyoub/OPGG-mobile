import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import RandomizerScreen from './screens/RandomizerScreen'
import ChampionsScreen from './screens/ChampionsScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Randomizer" component={RandomizerScreen} />
        <Stack.Screen name="Champions" component={ChampionsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
