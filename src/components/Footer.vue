<template>
  <nb-container>
    <nb-footer>
      <nb-footer-tab>
        <nb-button>
          <nb-text>Apps</nb-text>
        </nb-button>
        <nb-button>
          <nb-text>Camera</nb-text>
        </nb-button>
        <nb-button :active="true">
          <nb-text>Navigate</nb-text>
        </nb-button>
        <nb-button>
          <nb-text>Contact</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>

<script>
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text
} from "native-base";

export default {
  components: {
    Container,
    Header,
    Content,
    Footer,
    FooterTab,
    Button,
    Text
  }
};
</script>