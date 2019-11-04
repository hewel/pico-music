import * as React from 'react'
import { Global } from '@emotion/core'

import { globalStyle, appStyle } from './App.style'
import { setContainer } from '../Styles/mixins'
import TopNav from '../Components/TopNav'
import Player from '../Components/Player'

import 'normalize.css'

// const { useState, useCallback } = React

export default function App(): JSX.Element {
  return (
    <div className="app" css={appStyle}>
      <Global styles={globalStyle} />
      <TopNav css={setContainer()} />
      <Player css={setContainer()} />
    </div>
  )
}
