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

import Toto from "./components/test";
const Drawer = createDrawerNavigator({
  Home: { screen: Toto }
});
export default {};
</script>