import React from "react";
import api from "../api/unsplash";
import Search from "./Search";
import ImageList from "./ImageList/ImageList";

class App extends React.Component {
   state = {images: []}
  handleSubmit = async term => {
    const res = await api.get("/search/photos", {
      params: {
        query: term
      }
    })
    this.setState({images: res.data.results})
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "50px" }}>
        <Search runSubmit={this.handleSubmit} />
        <div >
         <ImageList imageLists={this.state.images}/>
        </div>
      </div>
    );
  }
}

export default App;
