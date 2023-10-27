import { StyleSheet } from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from '../../../../components/Themed';

export default function TabProfileScreen() {
  const router = useRouter();
  const pathname = usePathname();
  const paths = pathname.split('/');
  const [currPath, setCurrPath] = useState(paths[3]);
  console.log(pathname);
  useEffect(() => {
    if (paths[3] && paths[3] !== currPath) {
      setCurrPath(paths[3])
    }
  }, [pathname])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>question</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
