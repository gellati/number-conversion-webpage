import React from 'react'
import styled from 'styled-components'

interface P {
  size?: number;
  color?: string;
  margin?: string; // eg. '20px 20px'
}

interface StyledP {
  spinnerColor: string;
  spinnerSize: number;
  spinnerMargin: string;
}

const StyledSpinner = styled.div<StyledP>`
  border-radius: 50%;
  width: ${p => `${p.spinnerSize}em`};
  height: ${p => `${p.spinnerSize}em`};;
  margin: ${p => p.spinnerMargin};
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: ${p => `${p.spinnerSize / 15}em`} solid ${p => p.spinnerColor};
  border-right: ${p => `${p.spinnerSize / 15}em`} solid ${p => p.spinnerColor};
  border-bottom: ${p => `${p.spinnerSize / 15}em`} solid ${p => p.spinnerColor};
  border-left: ${p => `${p.spinnerSize / 15}em`} solid transparent;
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;

  &::after {
    border-radius: 50%;
    width: ${p => `${p.spinnerSize}em`};
    height: ${p => `${p.spinnerSize}em`};
  }

  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Spinner: React.FunctionComponent<P> = ({ color = '#fff', size = 6, margin = 'auto' }:P) => {
    return (
        <StyledSpinner spinnerColor={color} spinnerSize={size} spinnerMargin={margin} />
    )
}

export default Spinner
