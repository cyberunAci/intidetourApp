<template>
  <nb-header>
    <nb-left>
      <nb-button transparent button :onPress="change">
        <nb-icon name="menu" />
      </nb-button>
    </nb-left>
    <nb-body>
      <nb-title>{{ toto }}</nb-title>
    </nb-body>
  </nb-header>
</template>
<script>
import Draweer from "./Drawer";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Picker
} from "native-base";
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  components: {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
    Draweer,
    Item: Picker.Item
  },
  data: function() {
    return {
      toto: "toto est où ?",
      selected: ""
    };
  },
  methods: {
    change: function() {
      // if (this.toto == "toto est où ?") {
      //   this.toto = "il est là";
      // } else if (this.toto == "il est là") {
      //   this.toto = "toto est où ?";
      // }
      this.navigation.openDrawer();
    },
    onValueChange: function(value) {
      this.selected = value;
    }
  }
};
</script>