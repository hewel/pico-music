import * as React from 'react'
import { Global } from '@emotion/core'

import { ApolloProvider } from '@apollo/react-hooks'
import client from '../GraphQL/client'

import { globalStyle, appStyle } from './App.style'
import { setContainer } from '../Styles/mixins'
import TopNav from '../Components/TopNav'
import Player from '../Components/Player'

import 'normalize.css'

// const { useState, useCallback } = React

export default function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <div className="app" css={appStyle}>
        <Global styles={globalStyle} />
        <TopNav css={setContainer()} />
        <Player css={setContainer()} />
      </div>
    </ApolloProvider>
  )
}
