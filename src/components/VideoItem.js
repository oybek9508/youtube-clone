import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";

function VideoItem({ video, onSelectVideo }) {
  return (
    <Grid xs={12} item>
      <Paper
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          onSelectVideo(video);
        }}
      >
        <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default VideoItem;
