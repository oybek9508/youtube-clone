import React from "react";
import { Paper, Typography } from "@material-ui/core";

function VideoDetail({ video }) {
  if (!video) {
    return "Loading...";
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          width="100%"
          height="400px"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">{video.snippet.title}</Typography>
        <Typography varinat="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </div>
  );
}

export default VideoDetail;
