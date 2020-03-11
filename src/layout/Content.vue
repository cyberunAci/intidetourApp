<template>
  <nb-container>
    <nb-container>
          <navbar :navigation="navigation" />
    <nb-content>
      <home></home>
    </nb-content>
    </nb-container>
<footer/>
  </nb-container>
</template>
<script>
import Home from "../screens/Home/Home";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
export default {
  components:{
    Home,
    Navbar,
    Footer
  },
   props: {
    navigation: {
      type: Object
    }
  },
};
</script>