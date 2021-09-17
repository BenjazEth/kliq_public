import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { MapScreen } from "../../features/map/screens/map.screen";
import { LocationContextProvider } from "../../services/location/location.context";
import { colors } from "../../infrastructure/theme/colors";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  አቅጣጫ: "md-map",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} 
      color={color}
       />
    ),
  };
};

export const AppNavigator = () => (
    <LocationContextProvider>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: colors.brand.secondary,
              inactiveTintColor: colors.brand.muted,
              style: { backgroundColor: '#757575'}
            }}
          > 
            <Tab.Screen name="አቅጣጫ" component={MapScreen} />
          </Tab.Navigator>
    </LocationContextProvider>
);