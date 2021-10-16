import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUpScreen from './screens/SignUpScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Stack = createNativeStackNavigator();


const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;
  React.useEffect(() => {
      AsyncStorage.getItem('alreadyLaunched').then(value => {
        if(value == null){
          AsyncStorage.setItem('alreadyLaunched','true');
          setIsFirstLaunch(true);
        }
        else{
          setIsFirstLaunch(false);
        }
      });
  }, []);

  if(isFirstLaunch === null){
    return null;
  }
  else if(isFirstLaunch === true){
    routeName = 'Onboarding'
  }
  else{
    //return <LoginScreen/>
    routeName = 'Login'
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   headerShown: false
        // }}
        initialRouteName={routeName}
      >
        <Stack.Screen 
          name="Onboarding" 
          component={OnboardingScreen} 
          options={{headerShown: false}}
          />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{headerShown: false}}
          />
        <Stack.Screen 
          name="Signup" 
          component={SignUpScreen} 
          options={({navigation}) => ({
            title: '',
            headerStyle: {
                backgroundColor: '#f9fafd',
                shadowColor: '#f9fafd',
            },
            headerShadowVisible: false,
            headerLeft: () => (
              <View style={{marginLeft: 5}}>
                <FontAwesome.Button 
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
              </View>
            ),
          })}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App;
