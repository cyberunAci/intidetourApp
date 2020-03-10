<template>
  <nb-container>
    <Navbar />
      <content />
    <Footer />
  </nb-container>
</template>

<script>
import Content from "./Content";
import Footer from "./Footer";
import Navbar from "../components/Navbar";

export default {
  components: {
    Footer,
    Navbar,
    Content
  }
};
</script>