import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer, { PLAYER_STATES } from "react-native-youtube-iframe";

export default function VideoFrame(props: {videoId?: string}) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: PLAYER_STATES) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
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