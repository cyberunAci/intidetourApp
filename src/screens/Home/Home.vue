<template>
  <nb-container>
      <nb-content padder>
        <nb-card>
          <nb-card-item bordered>
            <nb-left>
              <nb-thumbnail :source="logo"></nb-thumbnail>
              <nb-body>
                <nb-text :style="{ alignSelf:'center', fontSize:20}">IntiDetour</nb-text>
              </nb-body>
            </nb-left>
          </nb-card-item>
          <nb-card-item>
            <nb-body>
              <image :source="cardImage" class="card-item-image" :style="stylesObj.cardItemImage" />
              <nb-text>//Your text here</nb-text>
            </nb-body>
          </nb-card-item>
          <nb-card-item :style="{ paddingVertical: 0 }">
            <nb-left>
              <nb-button iconLeft sucess>
                <nb-icon active name="logo-android" />
                <nb-text>Télécharger sur Google Play</nb-text>
              </nb-button>
            </nb-left>
            <nb-right>
              <nb-button iconLeft blue>
                <nb-icon active name="logo-apple" />
                <nb-text>Télécharger sur l'App Store</nb-text>
              </nb-button>
            </nb-right>
          </nb-card-item>
        </nb-card>
      </nb-content>
    </nb-container>
</template>
<script>
import { Dimensions } from "react-native";
import logo from "../../../assets/logo.png";
import cardImage from "../../../assets/drawer-cover.png";
const deviceWidth = Dimensions.get("window").width;
export default {

  data: function() {
    return {
      
      logo,
      cardImage,
      stylesObj: {
        cardItemImage: {
          resizeMode: "cover",
          width: deviceWidth / 1.18
        }
      }
    };
  }
};
</script>
<style>
.card-item-image {
  align-self: center;
  height: 150;
}
</style>