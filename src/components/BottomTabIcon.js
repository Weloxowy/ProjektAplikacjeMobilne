import {StyleSheet, Image} from "react-native";
import {PrzekaskiView} from "../views/Przekaski";

export const BottomTabIcon = ({ routeName, focused }) => {
    switch (routeName)
    {
        case 'Home':
            if(focused)
            {
                return <Image
                    style={styles.imgActive}
                    source={require('../images/Home(active).png')}

                />
            }
            else
            {
                return <Image
                    style={styles.img}
                    source={require('../images/Home(inactive).png')}
                />
            }
        case 'PrzekaskiView':
            if(focused)
            {
                return <Image
                    style={styles.imgActive}
                    source={require('../images/Popcorn(active).png')}
                />
            }
            else
            {
                return <Image
                    style={styles.img}
                    source={require('../images/Popcorn(inactive).png')}
                />
            }
        case 'Bilety1':
            if(focused)
            {
                return <Image
                    style={styles.imgActive}
                    source={require('../images/Ticket(Active).png')}
                />
            }
            else
            {
                return <Image
                    style={styles.img}
                    source={require('../images/Ticket(inactive).png')}
                />
            }
    }
}

const styles = StyleSheet.create({
    img:{
        backgroundColor: 'black',
        width: 28,
        height: 28
    },
    imgActive: {
        backgroundColor: 'black',
        width: 40,
        height: 40
    }
})