import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Video } from "gatsby-video"

const VideoComponent = () => {
  /*Breaks*/
  const videoQuery = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "bg.mp4" }) {
          name
          childVideoFfmpeg {
            webm: transcode(
              outputOptions: ["-crf 20", "-b:v 0"]
              maxWidth: 900
              maxHeight: 480
              fileExtension: "webm"
              codec: "libvpx-vp9"
            ) {
              width
              src
              presentationMaxWidth
              presentationMaxHeight
              originalName
              height
              fileExtension
              aspectRatio
            }
            mp4: transcode(
              maxWidth: 900
              maxHeight: 480
              fileExtension: "mp4"
              codec: "libx264"
            ) {
              width
              src
              presentationMaxWidth
              presentationMaxHeight
              originalName
              height
              fileExtension
              aspectRatio
            }
          }
        }
      }
    `
  )

  const video = videoQuery.childVideoFfmpeg
  return <Video autoPlay muted loop sources={[videos.webm, videos.mp4]} />
}

export default VideoComponent
