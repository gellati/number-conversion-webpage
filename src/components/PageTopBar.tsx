import React from 'react'
import styled from 'styled-components'
import LanguageSelector from './LanguageSelector'
import Toggle from './Toggle'
import {device} from './../styles/device'

const PageTopBarContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  padding: 20px 20px 0 0;
  @media ${device.mobileS} {
      flex-direction: column;
  }
  @media ${device.laptop} {
      flex-direction: row-reverse;
  }
`

interface P {
    toggleTheme?: () => void;
}

const PageTopBar = ({toggleTheme}:P) => {
    return (
        <PageTopBarContainer>
            <Toggle
                toggleTheme={toggleTheme}
            />
            <LanguageSelector />
        </PageTopBarContainer>
    )
}

export default PageTopBar
