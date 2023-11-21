import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useRouter } from 'expo-router';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { A } from '@expo/html-elements';

interface NewsObj {
  Enlace: string;
  Resultado: number;
  'Texto relacionado con el tema': string;
  Título: string;
}

export default function TabNewsScreen() {
  const router = useRouter();
  const [news, setNews] = useState<Array<NewsObj>>([]);

  useEffect(() => {
    const getRecent = async () => {
      try {
        if (process.env.EXPO_PUBLIC_API_URL) {
          const res = await axios.get(process.env.EXPO_PUBLIC_API_URL);
          console.log(res.data.results);
          setNews(res.data.results);
        }
      } catch (error) {
        console.log(error);
      }

      //setNews(res);
    };
    getRecent();
  }, []);
  // router.push('/signup/signin')
  return (
    <View style={styles.container}>
      <Text className="text-slate-50 text-4xl ">Noticias</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View className="overflow-auto gap-4 flex-1">
        {news.length > 0 &&
          news.map((nw) => (
            <Fragment key={'f-'+nw.Resultado}>
              <View key={nw.Resultado} className="text-base pl-4">
                <A style={styles.link} href="https://google.com">
                  {nw.Título}
                </A>
                <Text>{nw['Texto relacionado con el tema']}</Text>
              </View>
              <View
              key={'l-'+nw.Resultado}
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
              />
            </Fragment>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 16,
    height: 1,
    width: '80%'
  },
  link: {
    color: '#E53E5C',
    fontWeight: '600',
    fontSize: 16,
    textDecorationLine: 'underline'
  }
});
