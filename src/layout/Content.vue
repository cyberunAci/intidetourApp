<template>
  <nb-container>
    <nb-container>
          <navbar :navigation="navigation" />
    <nb-content>
      <home></home>
    </nb-content>
    </nb-container>

  </nb-container>
</template>
<script>
import Home from "../screens/Home/Home";
import Navbar from "../components/Navbar";

export default {
  components:{
    Home,
    Navbar,
  },
   props: {
    navigation: {
      type: Object
    }
  },
};
</script>