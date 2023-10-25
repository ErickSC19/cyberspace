import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View, useColorScheme } from 'react-native';
import { Image } from 'expo-image';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: { color: string; image: string }) {
  return (
    <View
      style={{ backgroundColor: props.color, borderRadius: 999, padding: 10 }}
    >
      <Image
        style={{ width: 48, height: 48 }}
        source={props.image}
        contentFit="contain"
        transition={0}
      />
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#E53E5C',
        tabBarInactiveTintColor: '#1F3F69',
        tabBarStyle: { backgroundColor: '#1F3F69', height: 100, padding: 20 }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              image={require('../../assets/images/course.svg')}
              color={color}
            />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          )
        }}
      />
      <Tabs.Screen
        name="forums"
        
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              image={require('../../assets/images/forums.svg')}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              image={require('../../assets/images/news.svg')}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              image={require('../../assets/images/profile.svg')}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  );
}
