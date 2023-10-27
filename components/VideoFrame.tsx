import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer, { PLAYER_STATES } from "react-native-youtube-iframe";

export default function VideoFrame(props: {videoId?: string, setFinished?: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: PLAYER_STATES) => {
    if (state === "ended") {
      props.setFinished(true);
      setPlaying(false);
      Alert.alert("!Ya puedes hacer el test!");
    }
  }, []);


  return (
      <YoutubePlayer
        height={200}
        width={350}
        play={playing}
        videoId={props.videoId || "iee2TATGMyI"}
        onChangeState={onStateChange}
      />
  );
}