<template>
  <nb-container>
    <nb-content>
      <nb-text> alqquaida</nb-text>
    </nb-content>
  </nb-container>
</template>
<script>
import React from "react";
import { Picker } from "native-base";
export default {
  components: { Item: Picker.Item },
  data: function() {
    return {
      selected: ""
    };
  },
  methods: {
    onValueChange: function(value) {
      this.selected = value;
    },
  }
};
</script>