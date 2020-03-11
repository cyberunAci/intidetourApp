<template>
  <nb-header :style="{maxWidth:500, paddingTop:20, paddingBottom:20}">
    <nb-left>
      <nb-button transparent :onPress="() => this.props.navigation.openDrawer()">
        <nb-icon name="menu" />
      </nb-button>
    </nb-left>
    <nb-body>
      <image :source="Logo" :style="stylesObj.logo"/>
      </nb-body>
  </nb-header>
</template>
<script>
import { Dimensions } from "react-native";
import Draweer from "./Drawer";
import Logo from "../../assets/logo-intidetour.png"
const deviceWidth = Dimensions.get("window").width;

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  
  data: function() {
    return {
      Logo,
      selected: "",
       stylesObj: {
        logo: {
          resizeMode: "cover",
          maxWidth:170,
          maxHeight:50,
          width: deviceWidth / 1.18
        }},
    };
  },
  methods: {
    menuSideBar: function() {
      this.navigation.openDrawer();
    },
    onValueChange: function(value) {
      this.selected = value;
    }
  }
};
</script>