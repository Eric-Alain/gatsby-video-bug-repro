import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const WorkTiles = props => {
  /*Breaks*/

  const videoQuery = useStaticQuery(
    graphql`
      query {
        allFile(filter: { relativePath: { eq: "bg.mp4" } }) {
          nodes {
            name
            childVideoFfmpeg {
              transcode(
                maxWidth: 900
                maxHeight: 480
                fileExtension: "mp4"
                codec: "libx264"
              ) {
                src
                fileExtension
                originalName
              }
            }
          }
        }
      }
    `
  )
  return (
    <video id="videoBg" autoPlay muted loop>
      <source src={""} type="video/mp4" />
    </video>
  )
}

export default WorkTiles
