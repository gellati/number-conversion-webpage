import React, { useState } from 'react'
import { Field, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { BsArrowUpDown } from 'react-icons/bs'
import ViewArea from '../components/ViewArea'
import InputSection from '../components/InputSection'
import { integer_to_roman, roman_to_integer } from '../util/numberConverters'

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

const ResultSection = styled.div`
    height: 50px;
`

const SelectionArea = styled.div`
    display: flex;
    justify-content: center;
`

const NumberConverter:React.FunctionComponent = () => {
    const { t } = useTranslation()

    const [isRomanToNumberDirection, setRomanToNumberDirection] = useState(true)

    const initialValues = {
        number: '',
    }

    const numberValidationSchema = Yup.object()
        .shape({
            number: Yup.string().matches(/^\d+$/, t('numberConverter.numberError'))
        })

    const romanValidationSchema = Yup.object()
        .shape({
            number: Yup.string().matches(/^[IVXLCDM]+$/, t('numberConverter.romanError'))
        })

    return (
        <ViewArea>
            {t('numberConverter.mainText')}
            <SelectionArea>
                {isRomanToNumberDirection
                    ? <div>{t('numberConverter.romanToNumber')}</div>
                    : <div>{t('numberConverter.numberToRoman')}</div>
                }
                <div onClick={() => setRomanToNumberDirection(!isRomanToNumberDirection)}>
                    <BsArrowUpDown />
                </div>
            </SelectionArea>

            <Formik
                initialValues={initialValues}
                onSubmit={() => {}}
                validationSchema={isRomanToNumberDirection === true
                    ? romanValidationSchema
                    : numberValidationSchema
                }
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

                        {isRomanToNumberDirection === true
                            ?
                            <>
                                <InputSection>
                                    <label htmlFor="number">
                                        {t('numberConverter.inputTitle')}
                                    </label>
                                    <Field
                                        id="number"
                                        name="number"
                                        placeholder={`${t('numberConverter.romanNumber')}`}
                                    />
                                    {errors.number && touched.number ? (
                                        <ErrorMessage>{errors.number}</ErrorMessage>
                                    ) : null}
                                </InputSection>
                                <ResultSection>
                                    {roman_to_integer(values.number)}
                                </ResultSection>
                            </>
                            :
                            <>
                                <InputSection>
                                    <label htmlFor="number">
                                        {t('numberConverter.inputTitle')}
                                    </label>
                                    <Field
                                        id="number"
                                        name="number"
                                        placeholder={`${t('numberConverter.integerNumber')}`}
                                    />
                                    {errors.number && touched.number ? (
                                        <ErrorMessage>{errors.number}</ErrorMessage>
                                    ) : null}
                                </InputSection>
                                <ResultSection>
                                    {integer_to_roman(parseInt(values.number))}
                                </ResultSection>
                            </>
                        }
                    </FormWrapper>)}
            </Formik>
        </ViewArea>
    )
}

export default NumberConverter
