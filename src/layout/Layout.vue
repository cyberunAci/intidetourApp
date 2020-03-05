<template>
  <nb-container>
    <Navbar />
    <Footer />
  </nb-container>
</template>

<script>
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default {
  components: {
    Footer,
    Navbar
  }
};
</script>