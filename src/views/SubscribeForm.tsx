import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'
import ViewArea from '../components/ViewArea'
import InputSection from '../components/InputSection'

import { Form, Field, Formik } from 'formik'

interface P {
    firstName: string;
    lastName: string;
    email: string;
}

const FormWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 0 auto;
`

const ErrorMessage = styled.div`
    color: var(--color-red);
    font-style: italic;
`

const ThankYouMessage = styled.div`
    color: var(color-lightGreen);
`

const SubscribeForm:React.FunctionComponent = () => {

    const { t } = useTranslation()

    const [isSubmitted, setIsSubmitted] = useState(false)
    const submit = (values:any) => {
        let targetUrl, formName

        targetUrl = `http://www.example.com`
        formName = 'new-person-customer'

        fetch(
            targetUrl,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ 'form-name': formName, ...values}),
            })
            .then(handleSuccess)
            .catch(error => alert(error))
    }

    const handleSuccess = () => {
    //    console.debug('Form successfully sent')
    }


    const setSubmitted = () => {
        setIsSubmitted(true)
        window.scrollTo(0, 0)
    }

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .max(16, t('subscribe.firstNameError'))
            .required(t('subscribe.firstNameRequired')),
        lastName: Yup.string()
            .max(16, t('subscribe.lastNameError'))
            .required(t('subscribe.lastNameRequired')),
        email: Yup.string()
            .email(t('emailError'))
            .required(t('subscribe.emailRequired')),
    })

    return (
        <ViewArea>
            {t('subscribe.mainText')}
            {!isSubmitted &&
        <Formik
            initialValues={initialValues}
            onSubmit={(
                values: P
            ) => {
                submit(values)
                setSubmitted()
            }}
            validationSchema={validationSchema}
            enableReinitialize={true}
        >
            {({ values, errors, touched }) => (
                <FormWrapper>
                    <pre>
                    values
                        {JSON.stringify(values, null, 2)}
                        <br />
                    errors
                        {JSON.stringify(errors, null, 2)}
                        <br />
                    touched
                        {JSON.stringify(touched, null, 2)}
                    </pre>
                    <InputSection>
                        <label htmlFor="firstName">{t('subscribe.firstName')}</label>
                        <Field id="firstName" name="firstName" placeholder="John" />
                        {errors.firstName && touched.firstName ? (
                            <ErrorMessage>{errors.firstName}</ErrorMessage>
                        ) : null}
                    </InputSection>

                    <InputSection>
                        <label htmlFor="lastName">{t('subscribe.lastName')}</label>
                        <Field id="lastName" name="lastName" placeholder="Doe" />
                        {errors.lastName && touched.lastName ? (
                            <ErrorMessage>{errors.lastName}</ErrorMessage>
                        ) : null}
                    </InputSection>

                    <InputSection>
                        <label htmlFor="email">{t('subscribe.email')}</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            type="email"
                        />
                        {errors.email && touched.email ? (
                            <ErrorMessage>{errors.email}</ErrorMessage>
                        ) : null}
                    </InputSection>
                    <button type="submit">{t('subscribe.submit')}</button>
                </FormWrapper>)}
        </Formik>}
            {isSubmitted &&
                <ThankYouMessage>
                    {t('thankYou')}
                </ThankYouMessage>
            }
        </ViewArea>
    )
}

export default SubscribeForm
