<template>
  <nb-container>
    <nb-footer>
      <nb-footer-tab>
        <nb-button>
          <nb-icon name="apps" />
          <nb-text>Apps</nb-text>
        </nb-button>
        <nb-button>
          <nb-icon name="camera" />
          <nb-text>Camera</nb-text>
        </nb-button>
        <nb-button :active="true">
          <nb-icon name="navigate" :active="true" />
          <nb-text>Navigate</nb-text>
        </nb-button>
        <nb-button>
          <nb-icon name="person" />
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
  Icon,
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
    Icon,
    Text
  }
};
</script>