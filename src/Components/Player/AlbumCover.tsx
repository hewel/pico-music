import * as React from 'react'
import { css } from '@emotion/core'

import { setImage } from '../../Styles/mixins'
import { calcSpan } from '../../Styles/functions'

export default function AlbumCover(): JSX.Element {
  return (
    <div
      css={css`
        ${setImage('cover')};
        height: ${calcSpan()(5)}px;
      `}
    >
      <img
        src="https://i.loli.net/2019/10/13/QawvZEenB4Hzh2A.jpg"
        alt="cover"
      />
    </div>
  )
}
