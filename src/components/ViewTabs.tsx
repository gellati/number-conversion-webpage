import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import Spinner from '../components/Spinner'
import { device } from './../styles/device'
import Frontpage from '../views/Frontpage'
import NumberConverter from '../views/NumberConverter'
import SubscribeForm from '../views/SubscribeForm'

const StyledTabs = styled.div`
  display: flex;
  align-items: center;

  border-radius: 5px;
  box-shadow: inset -3px -3px 4px 0 rgba(72, 72, 72, 0.5),
  inset 3px 3px 6px 0 rgba(0, 0, 0, 0.5);
  border: solid 1px #333536;
  background-color: #252728;
  width: 100%;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
`

const StyledTab = styled(NavLink)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  height: 30px;
  border-radius: 8px;
  text-decoration: none;
  &:last-child {
    margin-right: 0;
  }
  color: #cdcdcd;
  &.active {
    background-color: #464a4b;
    color: #ffffff;
  }
`

const StyledContentNav = styled.nav`
  display: flex;
  padding: 0 0 20px 0;
`

const ViewTabs:React.FunctionComponent = () => {
    const { t } = useTranslation()
    return(
        <React.Suspense fallback={<Spinner />}>
            <StyledContentNav>
                <StyledTabs>
                    <StyledTab to="/" exact>
                        {t("frontPage.title")}
                    </StyledTab>
                    <StyledTab to="/number-converter" exact>
                        {t('numberConverter.title')}
                    </StyledTab>
                    <StyledTab to="/subscribe" exact>
                        {t('subscribe.title')}
                    </StyledTab>
                </StyledTabs>
            </StyledContentNav>
            <Switch>
                <Route path="/" component={Frontpage} exact />
                <Route path="/number-converter" component={NumberConverter} exact />
                <Route path="/subscribe" component={SubscribeForm} exact />
            </Switch>
        </React.Suspense>
    )
}

export default ViewTabs
