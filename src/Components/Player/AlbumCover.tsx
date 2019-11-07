import * as React from 'react'
import { css } from '@emotion/core'

import { Skeleton } from '@material-ui/lab'

import SongContent from './SongContent'

import { setImage } from '../../Styles/mixins'
import { calcSpan } from '../../Styles/functions'

export default function AlbumCover(): JSX.Element {
  const { name, album } = React.useContext(SongContent)
  const coverSize = calcSpan()(5)

  return (
    <div
      css={css`
        ${setImage('cover')};
        height: ${coverSize}px;
      `}
    >
      {album ? (
        <img src={album.picUrl} alt={name || 'cover'} />
      ) : (
        <Skeleton width={coverSize} height={coverSize} variant="rect" />
      )}
    </div>
  )
}
