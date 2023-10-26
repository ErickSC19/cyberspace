import { useRouter, usePathname } from 'expo-router';
import { Image } from 'expo-image';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export default function AppNav({ children }: any) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.resultArea}>{children}</View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={
            pathname.includes('course')
              ? [styles.button, { backgroundColor: '#E53E5C' }]
              : styles.button
          }
          activeOpacity={0.6}
          onPress={() => router.push('/course')}
        >
          <Image
            style={{ width: 36, height: 36 }}
            source={require('../../assets/images/course.svg')}
            contentFit="contain"
            transition={0}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={
            pathname.includes('forums')
              ? [styles.button, { backgroundColor: '#E53E5C' }]
              : styles.button
          }
          activeOpacity={0.6}
          onPress={() => router.push('/forums')}
        >
          <Image
            style={{ width: 36, height: 36 }}
            source={require('../../assets/images/forums.svg')}
            contentFit="contain"
            transition={0}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={
            pathname.includes('news')
              ? [styles.button, { backgroundColor: '#E53E5C' }]
              : styles.button
          }
          activeOpacity={0.6}
          onPress={() => router.push('/news')}
        >
          <Image
            style={{ width: 36, height: 36 }}
            source={require('../../assets/images/news.svg')}
            contentFit="contain"
            transition={0}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={
            pathname.includes('profile')
              ? [styles.button, { backgroundColor: '#E53E5C' }]
              : styles.button
          }
          activeOpacity={0.6}
          onPress={() => router.push('/profile')}
        >
          <Image
            style={{ width: 36, height: 36 }}
            source={require('../../assets/images/profile.svg')}
            contentFit="contain"
            transition={0}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#000615'
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 8,
    justifyContent: 'space-evenly',
    backgroundColor: '#1F3F69'
  },
  button: {
    padding: 15,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#1F3F69',
    justifyContent: 'center',
    aspectRatio: "1/1"
  },
  resultArea: {
    flex: 1,
    width: '90%',
    marginVertical: 32
  }
});
