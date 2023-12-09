import {StyleSheet} from "react-native";
/* fonts */
export const FontFamily = {
  //poppinsSemiBold: "Poppins-SemiBold",
  //poppinsMedium: "Poppins-Medium",
  berlinSansFB: "Berlin Sans FB",
};
/* font sizes */
export const FontSize = {
  size_xs: 12,
  size_lgi: 19,
};
/* Colors */
export const Color = {
  colorWhite: "#fff",
  colorLightgray: "#cbcbcb",
  colorSilver: "rgba(196, 196, 196, 0.1)",
  colorWhitesmoke: "#ececec",
};
/* border radiuses */
export const Border = {
  br_xl: 20,
  br_11xl: 30,
};
export const styles = StyleSheet.create({
  iphonestatusbarPosition: {
    marginLeft: -176,
    left: "50%",
    position: "absolute",
  },
  parentWrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  navigationBarLayout: {
    width: 430,
    position: "absolute",
  },
  frameViewPosition: {
    left: 31,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  pencilIconLayout: {
    height: 35,
    width: 35,
  },
  garyLeeTypo: {
    height: 26,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  garyTypo: {
    marginTop: -5,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    height: 26,
    textAlign: "left",
    color: Color.colorWhite,
  },
  text: {
    fontFamily: FontFamily.berlinSansFB,
    display: "flex",
    width: 43,
    height: 20,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_lgi,
    alignItems: "center",
  },
  signalIcon: {
    width: 18,
    height: 18,
  },
  wiFiIcon: {
    width: 24,
    height: 22,
    marginLeft: 6,
  },
  fullBatteryIcon: {
    width: 29,
    marginLeft: 6,
    height: 32,
  },
  signalParent: {
    marginLeft: 226,
    alignItems: "center",
  },
  iphonestatusbar: {
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    alignItems: "center",
    left: "50%",
    marginLeft: -176,
    position: "absolute",
  },
  iphonestatusbarOgranicznik: {
    top: 5,
    width: 352,
    height: 32,
    left: "50%",
  },
  popcorninactiveIcon: {
    marginLeft: 58,
  },
  homeinactiveParent: {
    top: 18,
    width: 368,
    height: 58,
    justifyContent: "center",
  },
  line: {
    borderRadius: 575,
    backgroundColor: Color.colorWhite,
    width: 169,
    height: 5,
  },
  iphoneIndicator: {
    bottom: 0,
    left: 0,
    paddingHorizontal: 101,
    paddingVertical: 48,
    justifyContent: "center",
    alignItems: "center",
    height: 32,
  },
  navigationBar: {
    marginLeft: -207,
    bottom: -19,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: "#141414",
    height: 142,
    left: "50%",
    overflow: "hidden",
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  ustawienia: {
    fontSize: 17,
    width: 322,
    color: Color.colorWhitesmoke,
    height: 26,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  ustawieniaKonta: {
    fontSize: 30,
    lineHeight: 77,
    width: 286,
    height: 55,
    marginTop: -22,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.colorWhitesmoke,
    textAlign: "left",
  },
  appName: {
    height: 106,
    paddingHorizontal: 0,
    paddingVertical: 5,
    width: 278,
    justifyContent: "center",
    overflow: "hidden",
  },
  appNameWrapper: {
    height: 66,
    width: 278,
    justifyContent: "center",
  },
  frameWrapper: {
    height: 73,
    marginLeft: 17,
    width: 278,
    alignItems: "center",
  },
  backParent: {
    width: 319,
    justifyContent: "center",
    alignItems: "center",
  },
  frameChild: {
    width: 125,
    height: 125,
  },
  vectorWrapper: {
    height: "112%",
    width: "112.12%",
    top: "-6%",
    right: "-6.06%",
    bottom: "-6%",
    left: "-6.06%",
    borderRadius: 50,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.14)",
    borderWidth: 6,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  frameContainer: {
    height: "88.5%",
    width: "92.52%",
    top: "0%",
    right: "7.48%",
    bottom: "11.5%",
    left: "0%",
    position: "absolute",
  },
  groupChild: {
    height: "35.4%",
    width: "37.38%",
    top: "64.6%",
    right: "0%",
    bottom: "0%",
    left: "62.62%",
  },
  pencilIcon: {
    height: "26.55%",
    width: "28.04%",
    top: "69.03%",
    right: "4.67%",
    bottom: "4.42%",
    left: "67.29%",
  },
  groupParent: {
    height: "77.4%",
    width: "28.92%",
    top: "11.64%",
    right: "35.68%",
    bottom: "10.96%",
    left: "35.41%",
    position: "absolute",
  },
  groupWrapper: {
    borderRadius: 34,
    height: 146,
    width: 370,
    overflow: "hidden",
  },
  frameItem: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSilver,
    height: 89,
    zIndex: 0,
    width: 370,
  },
  garyLee: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    color: Color.colorLightgray,
    width: 182,
    height: 26,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  garyLee1: {
    lineHeight: 29,
    width: 182,
    fontSize: FontSize.size_lgi,
    marginTop: -5,
  },
  garyLeeParent: {
    justifyContent: "center",
  },
  pencilIcon1: {
    marginLeft: 83,
  },
  frameView: {
    top: 21,
    zIndex: 1,
  },
  rectangleParent: {
    marginTop: 13,
  },
  garyLee3: {
    fontSize: 22,
    lineHeight: 33,
    width: 182,
  },
  garyLee5: {
    fontSize: 15,
    lineHeight: 23,
    width: 228,
  },
  pencilIcon3: {
    marginLeft: 39,
  },
  frameGroup: {
    marginTop: 31,
  },
  frameParent: {
    top: 61,
    left: 22,
    height: 712,
    width: 370,
    position: "absolute",
  },
  wzr: {
    backgroundColor: "#000",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});
