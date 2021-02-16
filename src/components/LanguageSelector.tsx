import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from './../styles/device'
import { useTranslation } from 'react-i18next'

const LanguageButtons = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
`

const LanguageButton = styled.div`
    text-transform: uppercase;
    color: var(--color-text);
    font-size: 20px;
    float: right;
    width: 10%;
    margin: 20px;
    cursor: pointer;
`

interface P {
    locale?: string;
}

const LanguageSelector:React.FunctionComponent<P> = ({ locale }) => {

    const { i18n } = useTranslation()

    const changeLanguage = (lng:string) => {
        i18n.changeLanguage(lng)
    }

    const languages = ['fi', 'sv', 'en']

    return (
        <LanguageButtons>
            {languages.map((key, index) => {
                if( key === locale) {
                    return null
                }
                return <LanguageButton
                    key={index}
                    onClick={() => {
                        changeLanguage(key)
                    }}
                >
                    {key}
                </LanguageButton>
            })}
        </LanguageButtons>
    )
}

LanguageSelector.propTypes = {
    locale: PropTypes.string
}

export default LanguageSelector
