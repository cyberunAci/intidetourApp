<template>
  <nb-container>
    <nb-container>
      <navbar :navigation="navigation"/>
      <nb-text>toto</nb-text>
    </nb-container>
    <Footer />
  </nb-container>
</template>

<script>
import Footer from "../layout/Footer";
import Navbar from "../components/Navbar";
export default {
   props: {
    navigation: {
      type: Object
    }
  },
  components: {
    Footer,
    Navbar
  }
};
</script>