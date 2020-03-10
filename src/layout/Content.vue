<template>
  <nb-container>
    <nb-header />
    <nb-content>
      <nb-form>
        <nb-picker
          mode="dropdown"
          placeholder="Select one"
          placeholderStyle="{ color: '#2874F0' }"
          :note="false"
          :selectedValue="selected"
          :onValueChange="onValueChange"
        >
          <item label="Wallet" value="key0" />
          <item label="ATM Card" value="key1" />
          <item label="Debit Card" value="key2" />
          <item label="Credit Card" value="key3" />
          <item label="Net Banking" value="key4" />
        </nb-picker>
      </nb-form>
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