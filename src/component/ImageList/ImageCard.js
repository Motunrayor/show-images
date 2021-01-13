import React from "react";
import "../ImageList/image-list.css";

class ImageCard extends React.Component {
   constructor(props) {
      super();
      this.imageRef = React.createRef();
      this.state = { spans: 0 }
   }
   componentDidMount() {
   this.imageRef.current.addEventListener("load", this.setSpan);
   }

   setSpan = () => {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height / 10);
      this.setState({spans})
   }
  render() {
    const { urls, description } = this.props.images;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}> 
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}
export default ImageCard;
