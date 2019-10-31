import * as React from 'react'

import { setCard } from '../../Styles/mixins'

function withCard(Component: React.FC): JSX.Element {
  return <Component css={setCard} />
}

export default withCard
