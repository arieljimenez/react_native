import React from 'react';
import { Dimensions } from 'react-native'
import { DrawerNavigator } from 'react-navigation'

import { colors } from '~/styles'
import { Home } from '~/components'

// export default function Drawer(props) {
//   return (
//     <View>
//       <Text>
//         Drawer
//       </Text>
//     </View>
//   )
// }

export default Drawer = DrawerNavigator(
  { //RouteConfigs
    Home: {
      screen: Home,
      navigationOptions: {
        title: "My Home"
      }
    },
  },
  { // DrawerNavigatorConfig
    drawerWidth: 200,
    initialRouteName: 'Home',
    // contentComponent: SideDrawer,
    contentOptions: {
      activeTintColor: colors.primary,
      activeBackgroundColor: colors.blue,
      inactiveTintColor: colors.white,
      style: {
        marginVertical: 0,
      }
    },
    drawerWidth: Dimensions.get('window').width - 119,
  }
)
