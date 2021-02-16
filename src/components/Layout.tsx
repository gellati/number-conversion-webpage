import React from 'react'
import styled from 'styled-components'
import PageTopBar from './PageTopBar'
import ViewTabs from './ViewTabs'
import HeroArea from './HeroArea'
import { device } from './../styles/device'

const PageContainer = styled.div`
    margin: auto;
    font-family: "sans-serif";
    text-align: center;

    @media ${device.laptop} {
      max-width: 800px;
    }

    @media ${device.desktop} {
      max-width: 1400px;
    }
`

const StyledViewTabs = styled(ViewTabs)`
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    box-shadow: 5px 5px #ccc;
    padding: 10px;
    margin: 10px;

    @media ${device.laptop} {
        flex-direction: row;
    }
`

const StyledHeroArea = styled(HeroArea)`
@media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`

interface P {
  toggleTheme?: () => void;
}

const Layout:React.FunctionComponent<P> = ({toggleTheme}:P) => {
    return(
        <PageContainer>
            <PageTopBar
                toggleTheme={toggleTheme}
            />
            <StyledHeroArea />
            <StyledViewTabs />
        </PageContainer>
    )
}

export default Layout
