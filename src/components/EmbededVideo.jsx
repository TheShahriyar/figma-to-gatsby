import React from 'react'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

const EmbededVideo = () => {
  return (
    <>
      <div className="video-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="video-frame">
                <ResponsiveEmbed aspectRatio="16by9">
                  <embed type="image/svg+xml" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" />
                </ResponsiveEmbed>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmbededVideo
