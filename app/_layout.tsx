import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { DBProvider, useDB } from '../context/DBContext';
import { CourseProvider } from '../context/CourseContext';
import * as SQLite from 'expo-sqlite';
import { NativeWindStyleSheet } from 'nativewind';
import AppNav from '../components/AppNav';

NativeWindStyleSheet.setOutput({
  default: 'native'
});

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index'
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const AppState = () => {
  return (
    <DBProvider>
      <RootLayout />
    </DBProvider>
  );
};

export default function RootLayout() {
  const { dbIsLoading } = useDB();
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font
  });

  const db = SQLite.openDatabase('base.db');
  const [isLoading, setIsLoading] = useState(true);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS courses (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, grade INTEGER)'
      );
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded || dbIsLoading) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <CourseProvider>
        <AppNav>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="course/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="forums/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="news/index" options={{ headerShown: false }} />
            <Stack.Screen
              name="profile/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
        </AppNav>
      </CourseProvider>
    </ThemeProvider>
  );
}
