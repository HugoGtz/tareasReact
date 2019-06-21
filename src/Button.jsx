import React from 'react'
import Styled from 'styled-components'

import { ThemeConsumer } from './Providers'

const FancyButton = Styled.button`
    background-color: ${props => props.theme === "white"? "white" : "black"};
    color: ${props => props.theme === "white"? "black" : "white"};
`

const Button = ({children, ...rest}) => (
    <ThemeConsumer>
        {
            (context) => (
                <FancyButton theme={context.theme} {...rest}>
                    {children}
                </FancyButton>
            )
        }
    </ThemeConsumer>
)
export default FancyButton