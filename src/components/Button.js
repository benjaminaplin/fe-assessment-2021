import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
    position: absolute;
    width: 105px;
    height: 32px;
    left: 16px;
    top: 42px;
    background: #18BAE4;
    border-radius: 46px;
    border-width: 0;
    z-index: 3;
    transition: all 300ms ease-in-out;
    &:hover {
        cursor: pointer;
        box-shadow: 0px 11px 12px -14px rgba(0,0,0,0.76);
    }
`
const ButtonIconImage = styled.img`
    position: absolute;
    left: 5.71%;
    right: 75.24%;
    top: 18.75%;
    bottom: 18.75%;
    background: #0283CC;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
    animation: 1s ease-out slide 1, 1s ease-out rotate 1; 
    
    @keyframes slide {
        from {
            left: 5.71%;
            right: 75.24%;
        }
        to {
            left: 75.24%;
            right: 5.71%;
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg)
        }
        to {
            transform: rotate(90deg)
        }
    }
`

const Button = (props) => {
    return (
        <ButtonWrapper onClick={props.clickEvent}>
            <ButtonIconImage src="arrow.svg" alt="button icon"/>
        </ButtonWrapper>
    )
}

export default Button