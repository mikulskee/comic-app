import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },

    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        headerShown: false
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(RootStack);
