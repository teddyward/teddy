import PropTypes from 'prop-types';
import React from "react"
import '../../index.css';
import './postpreview.css'


class PostPreview extends React.Component {

  render() {
    return <>
        <div className="post" onClick={()=>window.location = this.props.link}>
            <div className="previewtext">
              <h4 className="font-bold">{this.props.title}</h4>
              <div className="postdescription">{this.props.subtitle}</div>
            </div>
            <img src={this.props.thumbnail} className="thumbnail"></img>
        </div>
    </>
  }
}

PostPreview.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    thumbnail: PropTypes.string
}

export default PostPreview;