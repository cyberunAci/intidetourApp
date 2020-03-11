<template>
  <nb-container>
      <content />
    <Footer />
  </nb-container>
</template>

<script>
import Content from "./Content";
import Footer from "./Footer";
import Navbar from "../components/Navbar";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  components: {
    Footer,
    Navbar,
    Content
  }
};
</script>