import * as React from 'react'
import { css } from '@emotion/core'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { Input } from '@material-ui/core'

import { Row, Col } from '../Grid'

import PlayCube from './PlayCube'
import PlayBar from './PlayBar'

import PlayConfigContext from './PlayConfigContext'
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
  const [songId = 1400261570, setSongId] = useState<number>()
  const { loading, data } = useQuery<SongRaw>(GET_SONG, {
    variables: { songId },
  })

  const [songData, setSongData] = useState<Song | null>(null)
  useEffect(() => {
    if (data && data.song) {
      setSongData(data.song)
    }
  }, [data])

  const [timeGroup, setTimeGroup] = useState<[number, number]>([0, 0])
  const [progressValue, setProgressValue] = useState(0)

  const [controlCallbacks] = useState<ControlCallbacks>({
    onTimeupdate(times, ratio) {
      setTimeGroup(times)
      setProgressValue(ratio)
    },
  })

  return (
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
      <Input
        placeholder="输入歌曲ID"
        defaultValue={1400261570}
        onChange={(
          event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ): void => {
          setSongId(parseInt(event.target.value, 10))
        }}
      />
      <PlayConfigContext.Provider value={{ interval: 200 }}>
        <SongContent.Provider value={songData || {}}>
          <Row align={Align.bottom}>
            <Col span={5}>
              <PlayControlContext.Provider value={controlCallbacks}>
                <PlayCube />
              </PlayControlContext.Provider>
            </Col>
            <Col span={19}>
              <PlayBar progressValue={progressValue} timeGroup={timeGroup} />
            </Col>
          </Row>
        </SongContent.Provider>
      </PlayConfigContext.Provider>
    </div>
  )
}
