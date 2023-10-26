import { Image } from 'expo-image';
import { styled } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
const StyledPressable = styled(Pressable);

export function LessonButton(props: {
  lid: string;
  image: string;
  label: string;
  isComplete?: boolean;
}) {
  const router = useRouter();
  const [currStyle, setCurrStyle] = useState(styles.container);
  return (
    <Pressable
      style={currStyle}
      onPressIn={() => setCurrStyle(styles.pressed)}
      onPress={() => router.push(`/(tabs)/course/${props.lid}`)}
      onPressOut={() => setCurrStyle(styles.container)}
    >
      <Image
        style={{ height: 70, width: 110, borderRadius: 5 }}
        source={props.image}
        contentFit="cover"
        transition={0}
      />
      <Text className="text-white flex-1">{props.label}</Text>
      <View
        className={`rounded-full border-[1px] ${
          props.isComplete ? 'border-[#54ac76]' : 'border-[#3e6292]'
        }`}
      >
        <Ionicons
          name="checkmark"
          size={20}
          color={props.isComplete ? '#54ac76' : '#1F3F69'}
        />
      </View>
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
    backgroundColor: '#1F3F69',
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
