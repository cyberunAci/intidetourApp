<template>
  <nb-container>
    <nb-content class="sidebar-content-wrapper" :bounces="false">
      <nb-list>
        <nb-list-item
          v-for="data in datas"
          :key="data.route"
          button
          noBorder
          :onPress="() => handleListItemClick(data)"
        >
          <nb-left>
            <nb-icon
              active
              :name="data.icon"
              :style="{ color: '#777', fontSize: 26, width: 30 }"
            />
            <nb-text>
              {{ data.name }}
            </nb-text>
          </nb-left>
          <nb-right v-if="data.types" :style="{ flex: 1 }">
            <nb-badge
              class="list-item-badge-container"
              :style="{ backgroundColor: data.bg }"
            >
              <nb-text
                class="list-item-badge-text"
                :style="stylesObj.badgeText"
              >
                {{ `${data.types} Types` }}
              </nb-text>
            </nb-badge>
          </nb-right>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions, Platform } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      stylesObj: {
        drawerCoverObj: {
          height: deviceHeight / 3.5
        },
        drawerImageObj: {
          left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
          top:
            Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
          resizeMode: "cover"
        },
        badgeText: {
          fontSize: Platform.OS === "android" ? 11 : 13,
          marginTop: Platform.OS === "android" ? -3 : 0,
          fontWeight: "400"
        }
      },
      datas: [
        {
          name: "Accueil",
          route: "Content",
          icon: "home",
          bg: "#C5F442"
        },
        {
          name: "À propos",
          route: "Apropos",
          icon: "phone-portrait",
          bg: "#C5F442"
        },
        

      ]
    };
  },
  methods: {
    handleListItemClick(dataObj) {
      this.navigation.navigate(dataObj.route);
    }
  }
};
</script>

<style>
.sidebar-content-wrapper {
  flex: 1;
  background-color: #fff;
}
.drawer-cover {
  flex: 1;
  align-self: stretch;
  position: relative;
  margin-bottom: 10;
}
.drawer-image {
  align-self: center;
  position: absolute;
  height: 75;
  width: 210;
}
.list-item-badge-container {
  border-radius: 3;
  height: 25;
  width: 72;
}
.list-item-badge-text {
  text-align: center;
}
</style>
