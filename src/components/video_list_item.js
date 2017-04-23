import React from 'react'

export default class VideoListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const video = this.props.video
    const imageURL = video.snippet.thumbnails.default.url
    const onVideoSelect = this.props.onVideoSelect

    return (
      <li className="list-group-item" onClick={ () => onVideoSelect(video) } >
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageURL} />
          </div>
          <div className="media-body">
            <div className="media-heading">
              {video.snippet.title}
            </div>
          </div>
        </div>
      </li>
    )
  }
}