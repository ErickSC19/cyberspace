import React, { useState, useCallback, useRef } from 'react';
import { Button, View, Alert, ActivityIndicator } from 'react-native';
import YoutubePlayer, { PLAYER_STATES } from 'react-native-youtube-iframe';
import { Text } from './Themed';

export default function VideoFrame(props: {
  videoId?: string;
  setFinished?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  const onStateChange = useCallback((state: PLAYER_STATES) => {
    if (state === 'ended') {
      if (props.setFinished) {
        props.setFinished(true);
      }
      setPlaying(false);
      Alert.alert('!Ya puedes hacer el test!');
    }
  }, []);

  return (
    <View>
      {loading && <Text>Loading video...</Text>}
      <YoutubePlayer
        height={200}
        width={350}
        play={playing}
        videoId={props.videoId || 'iee2TATGMyI'}
        onReady={() => setLoading(false)}
        onChangeState={onStateChange}
      />
    </View>
  );
}
