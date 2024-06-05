import React from 'react';
import { Provider } from 'react-redux';
import Apply_to_Join from './src/Screens/Auth/Apply_to_Join';
import store from './src/Redux/Store';
import { StatusBar } from 'react-native';
import { COLORS } from './src/Constants/themes';
import Home_Page from './src/Screens/Home/Home_Page';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/Navigation/MainNavigator';

const App = () => {
    return (
        <>
            <StatusBar animated barStyle={'dark-content'} backgroundColor={COLORS.Main_Color_White} />

            <NavigationContainer>
                <Provider store={store}>
                    <MainNavigation />
                </Provider>
            </NavigationContainer>
        </>
    );
};

export default App;

{/* <Stack.Screen name="Confirmation_Dialog" component={Confirmation_Dialog} /> */}
