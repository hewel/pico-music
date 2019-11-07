import * as React from 'react'
import { css } from '@emotion/core'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { Row, Col } from '../Grid'

import PlayCube from './PlayCube'
import PlayBar from './PlayBar'

import SongContent from './SongContent'
import PlayControlContext, { ControlCallbacks } from './PlayControlContext'

import { setContainer, Align } from '../../Styles/mixins'
import { marginSm } from '../../Styles/variables'

const { useState, useEffect } = React

const GET_SONG = gql`
  query Song($songId: ID!) {
    song(songId: $songId) {
      id
      name
      url
      album {
        picUrl
      }
      artist {
        name
      }
    }
  }
`

export interface Song {
  id: number
  name: string
  url: string
  album: {
    picUrl: string
  }
  artist: { name: string }[]
}

interface SongRaw {
  song: Song
}

export default function Player(): JSX.Element {
  const { loading, data } = useQuery<SongRaw>(GET_SONG, {
    variables: { songId: 1359595520 },
  })

  const [songData, setSongData] = useState<Song | null>(null)
  useEffect(() => {
    if (data && data.song) {
      setSongData(data.song)
    }
  }, [data])

  const [controlCallbacks] = useState<ControlCallbacks>({
    onPlay(paused) {
      console.log(paused)
    },
  })

  return (
    <SongContent.Provider value={songData || {}}>
      <div
        className="player-warp"
        css={css`
          ${setContainer()};
          position: fixed;
          bottom: ${marginSm}px;
          left: 50%;
          transform: translateX(-50%);
        `}
      >
        <Row align={Align.bottom}>
          <Col span={5}>
            <PlayControlContext.Provider value={controlCallbacks}>
              <PlayCube />
            </PlayControlContext.Provider>
          </Col>
          <Col span={19}>
            <PlayBar />
          </Col>
        </Row>
      </div>
    </SongContent.Provider>
  )
}
