import React from 'react'
import styled from 'styled-components'
import {device} from './../styles/device'
import { useTranslation } from 'react-i18next'

import hero from './../images/numerals-35937_1280.png'

const HeaderWrapper = styled.div`
  background-size: cover;
  color: #111;
  border-radius: 10px;
  margin-bottom: 1.8%;
`

const HeroImage = styled.img`
  @media ${device.mobileS} {
    max-width: 300px;
  }
  @media ${device.mobileL} {
    max-width: 400px;
  }
  @media ${device.tablet} {
    max-width: 700px;
  }
  @media ${device.laptop} {
    max-width: 800px;
  }
  @media ${device.desktop} {
    max-width: 1400px;
  }
`

interface P {
  alt: string;
}

const AWrapper = styled.a<P>`
  position: absolute;
  top: -500px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  :hover, :visited{
    top: -500px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
  :active, :focus{
    position: static;
    width: auto;
    height: auto;
  }
`
const HeroArea:React.FunctionComponent = () => {
    const { t } = useTranslation()
    return (
        <HeaderWrapper className="header">
            <AWrapper id="skip" alt="skip to content" href="#content">
                {t('skipToContent')}
            </AWrapper>
            <HeroImage src={hero} className="hero-logo" alt="Hero" />
        </HeaderWrapper>
    )
}

export default HeroArea
