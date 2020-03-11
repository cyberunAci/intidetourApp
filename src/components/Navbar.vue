<template>
  <nb-header>
    <nb-left>
      <nb-button transparent :onPress="() => this.props.navigation.openDrawer()">
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
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: function() {
    return {
      toto: "toto est où ?",
      selected: ""
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