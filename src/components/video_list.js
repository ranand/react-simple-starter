import React from 'react'
import ReactDOM from 'react-dom'
import VideoListItem from './video_list_item'

export default class VideoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const onVideoSelect = this.props.onVideoSelect
    const videoItems = this.props.videos.map((video) => {
      return (
        <VideoListItem 
          key={video.etag} 
          video={video} 
          onVideoSelect={onVideoSelect} />
      )
    })
    
    return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    )
  }
}