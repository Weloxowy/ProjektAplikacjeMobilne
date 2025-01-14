import * as React from "react";
import { Image } from "expo-image";
import {StyleSheet, View, Text, Pressable, Dimensions, ScrollView, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Color, styles} from "./styles"
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {useState} from "react";
import Cart from "../../Classes/Cart";
import Singleton from "../../Classes/User";
import {Login} from "../Login";
import {UstawieniaView} from "../Ustawienia";
import {Przekaski2View} from "../Przekaski2";
import {UserAvatar} from "../../components/UserAvatar";
import async from "async";

export function PrzekaskiView({ navigation }) {
  const width = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);
  function ActiveSlider(index)
  {
    setActiveIndex(index);

  }


    async function getItemById(id) {
        try {
            // Fetch data from the database
            const response = await fetch('https://aplikacjemobilne-ff0b1-default-rtdb.europe-west1.firebasedatabase.app/przekaski.json');

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();

            // Find the item with the given ID
            const item = data.foodProducts.find(product => product.id === id);

            // Log the item's name or indicate if not found
            if (item) {
                console.log(`Item Name: ${item.name}`);
            } else {
                console.log('Item not found');
            }
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }

  const carouselItems  = [
    { text: 'Mały Popcorn', imageSource: require("./assets/pngitem-4868092-2.png") },
    { text: 'Lody Oreo', imageSource: require("./assets/image-10.png") },
    { title: 'Item 3', text: 'Text 3' },
    { title: 'Item 4', text: 'Text 4' },
    { title: 'Item 5', text: 'Text 5' },
  ];
  function addToCart(index)
  {
        //Baza test
        getItemById(index-2);
      let contains = false;
      if(index === 3 || index === 8)
      {

          for(let i = 0; i < Cart.array.length; ++i)
          {

              if(Cart.array[i].id === 0)
              {
                  contains = true;
                  Cart.array[i].amount++;
              }
          }
          if(contains === false)
          {
              Cart.array.push({ id: 0, img: require('../Przekaski/assets/pngitem-4868092-2.png'), amount: 1, name:"Mały popcorn" });
          }

      }
      if(index === 4)
      {
          for(let i = 0; i < Cart.array.length; ++i)
          {
              if(Cart.array[i].id === 1)
              {
                  contains = true;
                  Cart.array[i].amount++;
              }
          }
          if(contains === false)
          {
              Cart.array.push({ id: 1, img: require('../Przekaski/assets/image-10.png'), amount: 1, name:"Lody Oreo" });
          }

      }
  }
  const renderItem = ({ item, index }) => {
    return (
        <TouchableOpacity onPress={() => addToCart(index)}>
        <View
            style={{
              backgroundColor: Color.colorGray_100,
              borderRadius: 30,
              height: 150,
              width:150,
              marginLeft: 55,
              marginRight: 25,
              justifyContent: 'center', // Center vertically
              alignItems: 'center',
                marginTop: 20,
                //paginationItemPadSize: 2,
            }}
        >

          <Image
            style={{
              top: 7,
              left: 33,
              width: 88,
              height: 112,
              position: "absolute",
          }}
            source={item.imageSource}
        />
          <Text style={{ fontSize: 30, color:'white', marginTop:85}} >{item.title}</Text>
          <Text style={{color:'white', }}>{item.text}</Text>
        </View>
        </TouchableOpacity>
    );
  };
  return (
      <ScrollView style={{ flex: 1 }}>
    <View style={styles.ekranPrzeksek}>



        <View style={[styles.headerEkranuPrzeksek, styles.sliderLayout]}>
            <View style={[styles.slider]}>
          <Image
            style={[styles.image2Icon, styles.image2IconLayout]}
            contentFit="cover"
            source={require("./assets/image-2.png")}
          />
          <LinearGradient
            style={[styles.sliderChild, styles.sliderBg]}
            locations={[0, 0.48, 1]}
            colors={[
              "rgba(0, 0, 0, 0.5)",
              "rgba(255, 255, 255, 0)",
              "rgba(0, 0, 0, 0.5)",
            ]}
          />
          <View style={styles.sliderItem} />
          <LinearGradient
            style={[styles.sliderInner, styles.sliderBg]}
            locations={[0.53, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
          />
        </View>



        <View style={[styles.frameParent, styles.frameParentFlexBox]}>
          <View style={[styles.frameWrapper, styles.frameParentFlexBox]}>
            <View style={styles.appNameWrapper}>
              <View style={styles.appName}>
                <Text style={[styles.idealneNaSeans, styles.przekskiLayout]}>
                  Idealne na seans
                </Text>
                <Text style={[styles.przekski, styles.przekskiTypo]}>
                  Przekąski
                </Text>
              </View>
            </View>
          </View>
            <View style={{left:-5}}>
                <UserAvatar style={{zIndex: '0'}} navigation={navigation} />
            </View>
        </View>

      </View>

      <View style={styles.komponentPrzekskiParent}>
          <TouchableOpacity onPress={() => navigation.navigate('Przekaski2View', {param: 0})}>
            <View style={[styles.komponentPrzekski, styles.komponentLayout]}>
                <View style={[styles.maskGroup, styles.maskGroupLayout]}>
                    <Image
                      style={[styles.image9Icon, styles.maskGroupLayout]}
                      contentFit="cover"
                      source={require("./assets/image-9.png")}
                    />
                </View>
          <LinearGradient
            style={[styles.wrapper, styles.komponentLayout]}
            locations={[0, 0.69]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
          >
            <Pressable style={[styles.pressable, styles.pressablePosition]} />
          </LinearGradient>

          <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
            <View>
              <Text style={[styles.ucztaWTrakcie, styles.dlaCiebieITypo]}>
                Uczta w trakcie seansu
              </Text>

              <Text style={[styles.przekski1, styles.textFlexBox]}>
                Przekąski
              </Text>

            </View>
            <View style={[styles.rightArrowWrapper, styles.frameParentFlexBox]}>
              <Image
                style={styles.rightArrowIcon}
                contentFit="cover"
                source={require("./assets/right-arrow.png")}
              />
            </View>
          </View>
            </View>
        </TouchableOpacity>

        <View style={styles.sliderNav}>
          <Pagination
              dotsLength={carouselItems.length}
              activeDotIndex={activeIndex}
              containerStyle={{ marginTop: -25 }}
              dotStyle={{
                width: 20,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: 'rgba(49, 7, 139, 1)',
              }}
              inactiveDotStyle={{
                backgroundColor: 'rgba(125, 125, 125, 0.33)',
                width: 10,
                height: 10,
              }}
              inactiveDotOpacity={0.6}
              inactiveDotScale={0.8}
          />
        </View>
        <View style={styles.sliderPrzekasek}>
        {/*elo*/}
        <Carousel
            layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={carouselItems}
            sliderWidth={700}
            itemWidth={200}
            activeSlideAlignment={"start"}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            renderItem={renderItem}
            loop={true}
            onSnapToItem={(index) => ActiveSlider(index)}
        />
          <Pagination
              dotsLength={carouselItems.length}
              activeDotIndex={activeIndex}
              containerStyle={{ marginTop: -25 }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light color for active dot
              }}
              inactiveDotStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)', // Light color for inactive dot
              }}
              inactiveDotOpacity={0.6} // Increase opacity for inactive dots
              inactiveDotScale={0.8} // Decrease size for inactive dots
          />
        </View>



        <View style={styles.naszeKlasykiParent}>
          <Text style={[styles.naszeKlasyki, styles.przekskiTypo]}>
            Nasze klasyki
          </Text>
          <Text style={[styles.dlaCiebieI, styles.dlaCiebieITypo]}>
            Dla ciebie i dla rodziny
          </Text>
        </View>
          <TouchableOpacity onPress={() => navigation.navigate('Przekaski2View', {param: 1})}>
          <View style={[styles.komponentPrzekski1, styles.komponentLayout]}>
          <LinearGradient
            style={[styles.komponentPrzekskiChild, styles.pressablePosition]}
            locations={[0, 0.69]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
          />
          <Image
            style={[styles.wrapper, styles.komponentLayout]}
            contentFit="cover"
            source={require("./assets/glowingspaceshiporbitsplanetstarrygalaxygeneratedbyai-1.png")}
          />
          <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
            <View>
              <Text style={[styles.ucztaWTrakcie, styles.dlaCiebieITypo]}>
                Ugaś pragnienie
              </Text>
              <Text style={[styles.przekski1, styles.textFlexBox]}>Napoje</Text>
            </View>
            <View style={[styles.rightArrowWrapper, styles.frameParentFlexBox]}>
              <Image
                style={styles.rightArrowIcon}
                contentFit="cover"
                source={require("./assets/right-arrow.png")}
              />
            </View>
          </View>
        </View>
          </TouchableOpacity>

      </View>
    </View>
      </ScrollView>
  );
}


