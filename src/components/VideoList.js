import React from "react";
import VideoItem from "./VideoItem";
import { Grid } from "@material-ui/core";

function VideoList({ videos, onSelectVideo }) {
  const videoList = videos.map((video, id) => (
    <VideoItem key={id} onSelectVideo={onSelectVideo} video={video} />
  ));
  return (
    <Grid container spacing={10}>
      {videoList}
    </Grid>
  );
}

export default VideoList;
