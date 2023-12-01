import { Image } from 'expo-image';
import { styled } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
// const StyledPressable = styled(Pressable);

export function HelpButton(props: {
  lid: string;
  image: string;
  label: string;
}) {
  const router = useRouter();
  const [currStyle, setCurrStyle] = useState(styles.container);
  return (
    <Pressable
      style={currStyle}
      onPressIn={() => setCurrStyle(styles.pressed)}
      onPress={() => router.push(`/help/${props.lid}`)}
      onPressOut={() => setCurrStyle(styles.container)}
    >
      <Image
        style={{ height: 70, width: 110, borderRadius: 5 }}
        source={props.image}
        contentFit="cover"
        transition={0}
      />
      <Text className="text-white flex-1">{props.label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#1F3F69',
    gap: 15,
    marginBottom: 15,
    paddingRight: 15
  },
  pressed: {
    width: '100%',
    display: 'flex',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#1F3F69',
    backgroundColor: '#1F3F69',
    gap: 15,
    marginBottom: 15,
    paddingRight: 15,
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
