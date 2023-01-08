import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../Contexts';

const Typography = ({
    variant,
    align = 'center',
    color = 'black',
    hoverColor = color,
    inLine = 'block',
    width = 'auto',
    bold = false,
    children,
}) => {
    const themeContext = React.useContext(ThemeContext);
    let StyledTypography;

    switch (variant) {
        case 'h0': {
            StyledTypography = styled.h1`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 64px;
                font-weight: 700;
                color: ${color};
                display: ${inLine};
                margin: 0px;
                width: ${width};
            `;
            break;
        }
        case 'h1': {
            StyledTypography = styled.h1`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 32px;
                font-weight: 700;
                color: ${color};
                display: ${inLine};
                margin: 0px;
                width: ${width};
            `;
            break;
        }
        case 'h2': {
            StyledTypography = styled.h2`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 26px;
                font-weight: 600;
                color: ${color};
                display: ${inLine};
                margin: 0px;
                width: ${width};
            `;
            break;
        }
        case 'h3': {
            StyledTypography = styled.h3`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 22px;
                font-weight: 600;
                color: ${color};
                display: ${inLine};
                margin: 0px;
                width: ${width};
            `;
            break;
        }
        case 'h4': {
            StyledTypography = styled.h4`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 20px;
                font-weight: 600;
                color: ${color};
                display: ${inLine};
                margin: 0px;
                width: ${width};
            `;
            break;
        }
        case 'h5': {
            StyledTypography = styled.h5`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 18px;
                font-weight: ${bold ? 600 : 500};
                color: ${color};
                display: ${inLine};
                margin: 0px;
                width: ${width};
            `;
            break;
        }
        case 'h6': {
            StyledTypography = styled.h6`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 16px;
                font-weight: ${bold ? 600 : 500};
                color: ${color};
                display: ${inLine};
                margin: 0px;
                width: ${width};
                transition: ${themeContext?.cssProperties?.transition?.short};
                &:hover {
                    color: ${hoverColor};
                    transition: ${themeContext?.cssProperties?.transition
                        ?.short};
                }
            `;
            break;
        }
        case 'p1': {
            StyledTypography = styled.p`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 16px;
                font-weight: ${bold ? 600 : 300};
                color: ${color};
                display: ${inLine};
                margin: 0px;
                width: ${width};
            `;
            break;
        }
        case 'p2': {
            StyledTypography = styled.p`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 12px;
                font-weight: ${bold ? 600 : 300};
                color: ${color};
                display: ${inLine};
                margin: 0px;
                width: ${width};
            `;
            break;
        }
        default: {
            break;
        }
    }

    return <StyledTypography>{children}</StyledTypography>;
};

export default Typography;
