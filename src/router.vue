<template>
  <root>
    <app-navigation></app-navigation>
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

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Navbar },
    Test: { screen: TestScreen }
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
      Drawer: { screen: Drawer }
    },
    {
      initialRouteName: "Drawer",
      headerMode: "none"
    }
  )
);
export default {
    components: { Root, AppNavigation }
};
</script>