import React from 'react'
import styled from 'styled-components'

const StyledInputSection = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
`

interface P {
  children: React.ReactNode;
}

const InputSection: React.FunctionComponent<P> = ({ children }:P) => {
    return (
        <StyledInputSection>
            {children}
        </StyledInputSection>
    )
}

export default InputSection
