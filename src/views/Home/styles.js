import {StyleSheet} from "react-native";
/* font sizes */
export const FontSize = {
    size_11xl: 16,
    size_mini: 15,
    size_smi: 16,
    size_sm: 14,
    size_xl: 20,
};
/* Colors */
export const Color = {
    colorWhite: "#fff",
    colorGray_100: "rgba(125, 125, 125, 0.33)",
    colorGray_200: "rgba(255, 255, 255, 0.15)",
    colorWhitesmoke_100: "#ececec",
    colorLightgray_100: "#cbcbcb",
    colorLightgray_200: "rgba(203, 203, 203, 0.15)",
};
/* Paddings */
export const Padding = {
    p_7xs: 6,
};
/* border radiuses */
export const Border = {
    br_11xl: 30,
    br_xl: 20,
    br_mid: 17,
    br_7xs: 6,
};

export const styles = StyleSheet.create({
    groupViewLayout: {
        width: 635,
        height: 543,

    },
    sliderPosition1: {
        width: 556,
        left: 0,
        top: 0,
        position: "absolute",
    },
    sliderChildBg: {
        backgroundColor: "transparent",
        position: "absolute",
    },
    parentLayout: {
        height: 165,
        width: 613,
        position: "absolute",
    },
    text2Position: {
        height: 43,
        left: 7,
        alignItems: "center",
        display: "flex",
        textAlign: "left",
        fontSize: FontSize.size_xl,
        position: "absolute",
    },
    napisyTypo: {
        fontFamily: 'poppins400',
        fontWeight: "500",
    },
    text5FlexBox: {
        display: "flex",
        alignItems: "center",
    },
    viewLayout: {
        width: 12,
        backgroundColor: Color.colorGray_100,
        borderRadius: Border.br_7xs,
        height: 12,
        top: 0,
        position: "absolute",
    },
    dzieDobryLayout: {
        width: 322,
        color: Color.colorWhitesmoke_100,
        textAlign: "left",
    },
    wrapperLayout: {
        width: 417,
        marginTop: 32,
    },
    buttonPosition: {
        backgroundColor: Color.colorLightgray_200,
        left: 0,
        top: 0,
    },
    znajdFilmW1Typo: {
        color: Color.colorLightgray_100,
        fontFamily: 'poppins500',
        fontWeight: "500",
        textAlign: "left",
    },
    repertuarPosition: {
        left: "50%",
        position: "absolute",
    },
    iconPosition: {
        left: 112,
        top: 223,
        position: "absolute",
    },
    rightFlexBox: {
        paddingVertical: 0,
        paddingHorizontal: Padding.p_7xs,
        backgroundColor: Color.colorGray_200,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
    },
    buttonLayout: {
        height: 42,
        width: 180,
        position: "absolute",
    },
    singleLayout: {
        width: 367,
        height: 46,
    },
    tytulParentLayout: {
        width: 150,
        marginLeft: 33.5,
    },
    tytulTypo1: {
        height: 24,
        lineHeight: 20,
        fontSize: FontSize.size_smi,
        color: Color.colorWhite,
        alignItems: "center",
        display: "flex",
        textAlign: "left",
        fontFamily: 'poppins600',
        fontWeight: "600",
    },
    frameLayout: {
        height: 25,
        width: 27,
    },
    tytulPosition: {
        marginTop: -10,
        top: "50%",
        left: "50%",
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
    },
    tytulTypo: {
        textAlign: "left",
        //lineHeight: 21,
        fontSize: FontSize.size_11xl,
        color: Color.colorWhite,
        fontFamily: 'poppins600',
        fontWeight: "600",

    },
    text2Typo: {
        fontFamily: 'poppins600',
        fontWeight: "600",
    },
    dzieDobry: {
        fontSize: 17,
        height: 53,
        fontFamily: 'poppins500',
        fontWeight: "500",
    },
    agnieszka: {
        fontSize: 33,
        marginTop: -29,
        fontFamily: 'poppins600',
        fontWeight: "600",
    },
    appName: {
        width: 267,
        height: 106,
        paddingHorizontal: 0,
        paddingVertical: 5,
        justifyContent: "center",
        overflow: "hidden",
    },
    appNameWrapper: {
        width: 258,
        justifyContent: "center",
        height: 111,
    },
    frameWrapper: {
        width: 255,
        height: 73,
        flexDirection: "row",
        alignItems: "center",
    },
    frameChild: {
        width: 71,
        height: 71,
    },
    vectorWrapper: {
        borderRadius: 50,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.14)",
        borderWidth: 4,
        marginLeft: 20,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    frameParent: {
        top: 57,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        left: 22,
        position: "absolute",
        zIndex: 1,
    },
    groupView: {
        height: 543,
        alignItems: "flex-start"
    },
    searchBarChild: {
        borderRadius: 10,
        width: 370,
        height: 59,
        position: "absolute",
    },
    znajdFilmW1: {
        width: 230,
        fontSize: FontSize.size_mini,
        color: '#ffaaaa',
        alignItems: "center",
        display: "flex",
    },
    logoIcon1: {
        width: 20,
        marginLeft: 72,
        height: 20,
        overflow: "hidden",
    },
    znajdFilmWRepertuarzeParent: {
        top: 18,
        left: 29,
        width: 311,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
    },
    searchBar: {
        left: 24,
        width: 370,
        height: 59,
        top: 0,
        position: "absolute",
    },
    searchBarWrapper: {
        marginTop: 32,
        height: 59,
    },
    glowingSpaceshipOrbitsPlaneIcon: {
        height: 119,
        width: 370,
    },
    image8Icon: {
        width: 408,
        height: 227,
    },
    maskGroup: {
        top: -223,
        left: -112,
        width: 641,
        height: 684,
        position: "absolute",
    },
    komponentPrzekskiChild: {
        borderBottomRightRadius: Border.br_xl,
        borderBottomLeftRadius: Border.br_xl,
        height: 119,
        width: 370,
        left: 0,
        top: 0,
    },
    wylosujSwjRabat1: {
        fontSize: FontSize.size_mini,
        color: Color.colorLightgray_100,
    },
    grzechotnik: {
        fontSize: FontSize.size_11xl,
        width: 217,
        marginTop: -4,
        color: Color.colorWhitesmoke_100,
        fontFamily: 'poppins600',
        fontWeight: "500",
        alignItems: "center",
        display: "flex",
        textAlign: "left",
    },
    rightArrowIcon8: {
        zIndex:0,
        width: 26,
        height: 32,
    },
    rightArrowIcon: {
        width: 13,
        height: 16,
    },
    rightWrapperFlexBox: {
        paddingVertical: 0,
        paddingHorizontal: Padding.p_7xs,
        backgroundColor: Color.colorGray_300,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        overflow: "hidden",
    },
    rightArrowWrapper: {
        borderRadius: Border.br_mid,
        width: 59,
        height: 54,
        marginLeft: 49,
    },
    frameGroup: {
        top: 28,
        width: 325,
        flexDirection: "row",
        alignItems: "center",
        left: 22,
        position: "absolute",
    },
    komponentPrzekski: {
        marginLeft: -184.5,
        borderRadius: Border.br_xl,
        height: 119,
        width: 370,
        top: 0,
        overflow: "hidden",
    },
    komponentPrzekskiWrapper: {
        height: 119,
        marginTop: 32,
    },
    cayRepertuar: {
        letterSpacing: 0.4,
        lineHeight: 18,
        fontSize: FontSize.size_smi,
       fontFamily: 'poppins400',
        fontWeight: "500",
        color: Color.colorWhite,
        textAlign: "left",
    },
    button: {
        paddingHorizontal: 81,
        paddingVertical: 23,
        borderRadius: Border.br_xl,
        backgroundColor: Color.colorLightgray_200,
        left: 0,
        top: 0,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
    },
    buttonWrapper: {
        top: 460,
        left: 99,
    },
    tytul: {
        width: 55,
    },
    tytul1: {
        width: 58,
    },
    rightArrowIcon9: {
        width: 13,
        height: 16,
    },
    tytulParent: {
        marginTop: -10.5,
        top: "50%",
        width: 150,
        marginLeft: 33.5,
        left: "50%",
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
    },
    tytul2: {
        width: 250,
    },
    tytulWrapper: {
        marginLeft: -101.5,
        justifyContent: "space-between",
        width: 203,
    },
    singleBar: {
        height: 46,
    },
    rightArrowFrame: {
        paddingVertical: 0,
        paddingHorizontal: Padding.p_7xs,
        backgroundColor: Color.colorGray_200,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: Border.br_xl,
        left: 0,
        top: 0,
        position: "absolute",
    },
    tytul5: {
        width: 186,
    },
    singleBar1: {
        marginTop: 10,
        height: 46,
    },
    tytulParent1: {
        width: 150,
        marginLeft: 33.5,
        marginTop: -10,
    },
    singleBarInner: {
        top: 13,
        left: 330,
        position: "absolute",
    },
    repertuar: {
        marginLeft: -189,
        top: 115,
        width: 378,
    },
    najbliszeSeanse: {
        top: 77,
        left: 120,
        textAlign: "center",
        lineHeight: 20,
        fontSize: FontSize.size_smi,
        color: Color.colorLightgray_100,
       // fontFamily: FontFamily.poppinsSemiBold,
        fontWeight: "600",
        position: "absolute",
    },
    renderItemContainer: {
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    renderItemText: {
        fontSize: FontSize.size_xl,
        color: Color.colorWhite,
        marginRight: 10,
        textAlignVertical: 'center',


    },
    rightArrowIcon_gb: {
        width: 13,
        height: 16,
    },
    repertuar1: {
        fontSize: 23,
        color: "#f5f5f5",
        textAlign: "left",
    },
    repertuar_gb: {
        fontSize: FontSize.size_xl,
        color: "#f5f5f5",
        alignItems:"center",
        justifyContent: "center",
        marginTop:100,
        flex: 1,


    },
    itemText: {
        fontSize: 40,
        color: "#f5f5f5",
    },
    sprawdNaszeNowoci1: {
        fontSize: 16,
        width: 285,
        alignItems: "center",
        display: "flex",
    },
    repertuarParent: {
        marginLeft: -188,
        top: 0,
    },
    frameView: {
        height: 502,
        marginTop: 32,
        width: 414,
    },
    glowingSpaceshipOrbitsPlaneIcon1: {
        width: '100%',
        height: '100%',
    },
    komponentPrzekski1: {
        marginLeft: -185,
        borderRadius: Border.br_xl,
        height: 119,
        width: 370,
        overflow: "hidden",
        left: "50%",
        marginTop: -200,
    },
    komponentPrzekskiFrame: {
        height: 119,
        marginTop: 32,

    },

    groupParent: {
        height: 753,
        width: 414,
        left: 0,
        top: 0,
        position: "absolute",
    },
    text5: {
        fontSize: 19,
      //  fontFamily: FontFamily.berlinSansFB,
        width: 43,
        height: 20,
        color: Color.colorWhite,
        alignItems: "center",
        textAlign: "left",
    },
    ekranGowny111: {
        backgroundColor: "#000",
        flex: 1,
        height: 1300,
        overflow: "hidden",
        width: "100%",
    },
    active: {
        color: '#ffffff'
    },
    inactive: {
        color: 'rgba(44,43,43,0.5)'
    },
    sliderView: {
        marginLeft: -101.5,
        top: 50,
        justifyContent: "space-between",
        width: 203,
    },
    sliderh1: {
        width: 450,
        fontSize: 32,
        color: Color.colorWhite,
        display: "flex",
        textAlign: "left",
        fontFamily: 'poppins600',
        fontWeight: "600",
    },
    sliderh2: {
        lineHeight: 30,
        fontSize: 20,
        color: Color.colorWhite,
        display: "flex",
        textAlign: "left",
        fontFamily: 'poppins600',
        fontWeight: "500",
    },
    sliderh2r: {
        lineHeight: 30,
        fontSize: 20,
        color: Color.colorWhite,
        left: 90,
        display: "flex",
        textAlign: "right",
        fontFamily: 'poppins600',
        fontWeight: "500",
    },
    sliderLayered: {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(87,84,84,0.65)'

}

});
