import styled from "styled-components";
import { DIMENSIONS, THEME } from "./theme";
import { StyledButtonProps } from "./types";

export const Button = styled.div<StyledButtonProps>`
    display: flex;
    flex-direction: ${({ iconPosition }) => (iconPosition === "end" ? "row" : "row-reverse")};
    justify-content: center;
    text-align: center;
    text-transform: capitalize;
    padding: ${({ size }) => `${DIMENSIONS[size].paddingBlock}px ${DIMENSIONS[size].paddingInline}px`};
    border-radius: ${({ isRounded }) => (isRounded ? "50px" : "4px")};
    font-size: ${({ size }) => `${DIMENSIONS[size].fontSize}px`};
    line-height: ${({ size }) => `${DIMENSIONS[size].lineHeight}px`};
    font-family: "Arimo", "arial";
    border: 1px solid;
    cursor: pointer;
    outline: none;
    width: ${({ width }) => width};
    color: ${({ variant, color }) => `${THEME[variant][color].default.color}`};
    background-color: ${({ variant, color }) => `${THEME[variant][color].default.backgroundColor}`};
    border: ${({ variant, color }) => `${THEME[variant][color].default.border}`};
    opacity: ${({ variant, color }) => `${THEME[variant][color].default.opacity}`};
    &:hover {
        color: ${({ variant, color }) => `${THEME[variant][color].hover.color}`};
        background-color: ${({ variant, color }) => `${THEME[variant][color].hover.backgroundColor}`};
        border: ${({ variant, color }) => `${THEME[variant][color].hover.border}`};
        opacity: ${({ variant, color }) => `${THEME[variant][color].hover.opacity}`};
    }
    &:active {
        color: ${({ variant, color }) => `${THEME[variant][color].active.color}`};
        background-color: ${({ variant, color }) => `${THEME[variant][color].active.backgroundColor}`};
        border: ${({ variant, color }) => `${THEME[variant][color].active.border}`};
        opacity: ${({ variant, color }) => `${THEME[variant][color].active.opacity}`};
    }
`;
