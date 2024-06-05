
import { createStackNavigator } from "@react-navigation/stack";
import Apply_to_Join from "../Screens/Auth/Apply_to_Join";
import Clinic_Visita from "../Screens/Auth/Clinic_Visita";
import Home_visita from "../Screens/Auth/Home_visita";
import Password_page from "../Screens/Auth/Password_page";
import Home_Page from "../Screens/Home/Home_Page";
import Price_Visita from "../Screens/Profile/Price_Visita";
import Confirmation_Dialog from "../Component/Confirmation_Dialog";



const RootStack = createStackNavigator();


const MainNavigation = () => {

    return (
        <>
            <RootStack.Navigator
                initialRouteName="Apply_to_Join"
                screenOptions={{ headerShown: false }}
            >

                <RootStack.Screen
                    name="Apply_to_Join"
                    component={Apply_to_Join}
                    options={{ headerShown: false }}

                />

                <RootStack.Screen
                    name="Clinic_Visita"
                    component={Clinic_Visita}
                    options={{ headerShown: false }}

                />

                <RootStack.Screen
                    name="Home_visita"
                    component={Home_visita}
                    options={{ headerShown: false }}

                />

                <RootStack.Screen
                    name="Password_page"
                    component={Password_page}
                    options={{ headerShown: false }}

                />

                <RootStack.Screen
                    name="Home_Page"
                    component={Home_Page}
                    options={{ headerShown: false }}

                />

                <RootStack.Screen
                    name="Price_Visita"
                    component={Price_Visita}
                    options={{ headerShown: false }}

                />
                 <RootStack.Screen
                    name="Confirmation_Dialog"
                    component={Confirmation_Dialog}
                    options={{ headerShown: false }}

                />
            </RootStack.Navigator>


        </>)
}

export { MainNavigation }