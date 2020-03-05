<template>
    <nb-footer>
      <nb-footer-tab>
        <nb-button vertical badge>
          <nb-badge>
              <nb-text>2</nb-text>
          </nb-badge>
          <nb-icon name="apps" />
          <nb-text>Apps</nb-text>
        </nb-button>
        <nb-button >
          <nb-icon name="camera" />
          <nb-text>Camera</nb-text>
        </nb-button>
        <nb-button vertical badge :active="true">
          <nb-badge>
            <nb-text>51</nb-text>
          </nb-badge>
          <nb-icon name="navigate" :active="true" />
          <nb-text>Navigate</nb-text>
        </nb-button>
        <nb-button>
          <nb-icon name="contact" />
          <nb-text>Contact</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
</template>

<script>
export default {
  data() {
    return {
      toto: ""
    };
  },
  mounted() {
    this.toto = "il est là";
  },
  methods: {
    change: function() {
      if (this.toto == "il est pas là") {
        this.toto = "il est là";
      } else if (this.toto == "il est là") {
        this.toto = "il est pas là";
      }
    }
  }
};
</script>

