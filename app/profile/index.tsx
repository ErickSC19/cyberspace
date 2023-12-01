import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';

export default function TabProfileScreen() {
  return (
    <View style={styles.container}>
      <Text className="text-slate-50 text-4xl ">Perfil</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 32,
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
});
