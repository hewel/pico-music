import * as React from 'react'
import { Global } from '@emotion/core'

import { appStyle, globalStyle } from './App.style'

import Player from '../Components/Player'

import 'normalize.css'

const { useState, useCallback } = React

export default function App(): JSX.Element {
  return (
    <div className="app" css={appStyle}>
      <Global styles={globalStyle} />
      <Player />
    </div>
  )
}
