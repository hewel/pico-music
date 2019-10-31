/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'

import { setCard } from '../../Styles/mixins'

type ComponentProps = React.HTMLAttributes<HTMLDivElement>

function withCard(Component: React.FC): React.FC<ComponentProps> {
  return function TComponent(props: ComponentProps): JSX.Element {
    return <Component css={setCard} {...props} />
  }
}

export default withCard
