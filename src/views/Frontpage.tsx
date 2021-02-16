import React from 'react'
import { useTranslation } from 'react-i18next'
import ViewArea from '../components/ViewArea'

const Frontpage:React.FunctionComponent = () => {
    const { t } = useTranslation()
    return (
        <ViewArea>
            <div>
                {t('frontPage.title')}
            </div>
            <div>
                {t('frontPage.mainText')}
            </div>
        </ViewArea>
    )
}

export default Frontpage
