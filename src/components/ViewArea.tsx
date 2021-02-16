import React from 'react'
import styled from 'styled-components'

const StyledViewArea = styled.div`
    padding-bottom: 50px;
`
interface P {
    children: React.ReactNode;
}

const ViewArea:React.FunctionComponent<P> = ({ children }:P) => {
    return(
        <StyledViewArea id="content">
            {children}
        </StyledViewArea>
    )
}

export default ViewArea
