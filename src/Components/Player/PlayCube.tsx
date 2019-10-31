import * as React from 'react'
import withCard from '../_utils/withCard'

function PlayCube(props): JSX.Element {
  return (
    <div className="play-cube" {...props}>
      PlayCube
    </div>
  )
}

export default withCard(PlayCube)
