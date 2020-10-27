import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: "",
  };
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 100,
        key: "AIzaSyAhwTyZ0mMWYt3SXTjjffSRX_6bghNKIV4",
        q: searchTerm,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
    console.log(this.state.selectedVideo);
  };
  componentDidMount() {
    this.handleSubmit("beautiful masjids");
  }

  onSelectVideo = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };
  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <Grid container spacing={10} justify="center">
        <Grid xs={12} item>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={6}>
              <VideoDetail
                video={selectedVideo}
                style={{ marginLeft: "20px" }}
              />
            </Grid>
            <Grid item xs={6}>
              <VideoList videos={videos} onSelectVideo={this.onSelectVideo} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
