<template>
  <root>

    <app-navigation>
    </app-navigation>
  </root>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "vue-native-router";
import { Root } from "native-base";
import Navbar from "./components/Navbar";
import SideBar from "./components/Drawer";
import TestScreen from "./components/test";
import ContentScreen from "./layout/Content";
import LayoutScreen from "./layout/Layout";


const Drawer = createDrawerNavigator(
  {
    Home: { screen: LayoutScreen },
    Test: { screen: TestScreen },
    Content: { screen: ContentScreen },
    Navbar: { screen: Navbar }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: SideBar
  }
);

const AppNavigation = createAppContainer(
  createStackNavigator(
    {
      Drawer: Drawer ,    
      Details: TestScreen,
      Home: LayoutScreen

      
    },
    {
      initialRouteName: "Drawer",
      headerMode: "none"
    }
  )
);
export default {
  components: { Root, AppNavigation, Navbar},
  props: {
    navigation: {
      type: Object
    }
  },
};
</script>