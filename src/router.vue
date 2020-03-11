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
import AproposScreen from "./components/apropos";
import ContentScreen from "./layout/Content";

const Drawer = createDrawerNavigator(
  {
    Home: { screen: ContentScreen },
    Apropos: { screen: AproposScreen },
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
      Apropos: AproposScreen,
      Home: ContentScreen

      
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