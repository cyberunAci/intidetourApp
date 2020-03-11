<template>
  <nb-container>
    <nb-container>
      <navbar :navigation="navigation" />
      <nb-title> À propos </nb-title>
      <text v-for="(apropo,key) in apropos" :key="key">{{ apropo.text }}</text>
    </nb-container>
    <Footer />
  </nb-container>
</template>

<script>
import Footer from "../layout/Footer";
import Navbar from "../components/Navbar";
import { HttpClient } from "../utils/httpClient";
export default {
   props: {
    navigation: {
      type: Object
    }
  },
  components: {
    Footer,
    Navbar
  },
  data() {
    return {
      apropos: []
    };
  },
  methods: {
    getData() {
      this.apropos = [];
      HttpClient.get("/api/apropos")
        .then(({ data }) => {
          data.data.forEach(_apropos => {
            this.apropos.push(_apropos);
          });
        })
        .catch(response => {
          console.log(response.data);
          console.log("erreur");
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>
