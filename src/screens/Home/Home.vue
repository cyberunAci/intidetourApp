<template>
  <nb-container>
      <nb-content padder>
        <nb-card>
          <nb-card-item bordered>
            <nb-left>
              <nb-thumbnail :source="logo"></nb-thumbnail>
              <nb-body>
                <nb-text :style="{ alignSelf:'center', fontSize:25}">IntiDetour</nb-text>
              </nb-body>
            </nb-left>
          </nb-card-item>
          <nb-card-item>
            <nb-body>
              <image :source="cardImage" class="card-item-image" :style="stylesObj.cardItemImage" />
              <nb-text>//Your text here</nb-text>
            </nb-body>
          </nb-card-item>
          <nb-card-item>
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
        },
       /*  buttonAndroid:{
                  borderRadius: 35,
                  marginRight:50,
        }, */
        /* buttonApple:{
                  borderRadius: 35,
                  marginLeft: 15,
        } */
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