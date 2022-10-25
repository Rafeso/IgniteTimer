import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
   variant: ButtonVariant;
}

const ButtonVariants = {

}

export const ButtonContainer = styled.button<ButtonContainerProps>`
   width: 180px;
   height: 60px;
`