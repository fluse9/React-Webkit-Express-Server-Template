import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../../Contexts';

const BUTTON_SIZES = {
    XS: 'XS',
    S: 'S',
    M: 'M',
    L: 'L',
    XL: 'XL',
    CUSTOM: 'CUSTOM',
};

const BUTTON_TYPES = {
    WHITE: 'WHITE',
    GRAY: 'GRAY',
    COLORED: 'COLORED',
    OUTLINED: 'OUTLINED',
    TRANSPARENT: 'TRANSPARENT',
};

const Button = ({
    onClick = () => {},
    size = BUTTON_SIZES?.M,
    width = '100%',
    type = 'WHITE',
    color = 'white',
    children,
}) => {
    const themeContext = React.useContext(ThemeContext);
    let button = <div />;
    const [buttonContainerWidth, setButtonContainerWidth] =
        React.useState('0px');

    const handleState = () => {
        switch (size) {
            case BUTTON_SIZES?.XS:
                setButtonContainerWidth('96px');
                break;
            case BUTTON_SIZES?.S:
                setButtonContainerWidth('128px');
                break;
            case BUTTON_SIZES?.M:
                setButtonContainerWidth('256px');
                break;
            case BUTTON_SIZES?.L:
                setButtonContainerWidth('384px');
                break;
            case BUTTON_SIZES?.XL:
                setButtonContainerWidth('512px');
                break;
            case BUTTON_SIZES?.CUSTOM:
                setButtonContainerWidth(width);
                break;
            default:
                break;
        }
    };

    React.useEffect(() => {
        handleState();
    });

    switch (type) {
        case BUTTON_TYPES?.WHITE: {
            const WhiteButtonContainer = styled.button`
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: ${themeContext?.cssProperties?.transition?.medium};
                border: 0;
                background: ${themeContext?.palette?.white?.main};
                border-radius: 32px;
                box-shadow: ${themeContext?.cssProperties?.boxShadow?.light};
                width: ${buttonContainerWidth};
                margin: ${themeContext?.cssProperties?.margin?.none};
                padding: ${themeContext?.cssProperties?.padding?.large};
                &:hover {
                    box-shadow: ${themeContext?.cssProperties?.boxShadow
                        ?.lightHover};
                    transition: ${themeContext?.cssProperties?.transition
                        ?.medium};
                }
            `;
            button = (
                <WhiteButtonContainer onClick={() => onClick()}>
                    {children}
                </WhiteButtonContainer>
            );
            break;
        }
        case BUTTON_TYPES?.GRAY: {
            const GrayButtonContainer = styled.button`
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: ${themeContext?.cssProperties?.transition?.short};
                border: 0;
                background: ${themeContext?.palette?.gray?.light};
                border-radius: 32px;
                width: ${buttonContainerWidth};
                margin: ${themeContext?.cssProperties?.margin?.none};
                padding: ${themeContext?.cssProperties?.padding?.extraLarge};
                &:hover {
                    background: ${themeContext?.palette?.gray?.main};
                    transition: ${themeContext?.cssProperties?.transition
                        ?.short};
                }
                &:focus {
                    z-index: 1;
                    background: ${themeContext?.palette?.white?.main};
                    box-shadow: ${themeContext?.cssProperties?.boxShadow
                        ?.lightHover};
                    transition: ${themeContext?.cssProperties?.transition
                        ?.short};
                }
            `;
            button = (
                <GrayButtonContainer onClick={() => onClick()}>
                    {children}
                </GrayButtonContainer>
            );
            break;
        }
        case BUTTON_TYPES?.COLORED: {
            const ColoredButtonContainer = styled.button`
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: ${themeContext?.cssProperties?.transition?.medium};
                border: 0;
                background: ${color};
                border-radius: 32px;
                width: ${buttonContainerWidth};
                margin: ${themeContext?.cssProperties?.margin?.none};
                padding: ${themeContext?.cssProperties?.padding?.small};
                &:hover {
                    transition: ${themeContext?.cssProperties?.transition
                        ?.medium};
                }
            `;
            button = (
                <ColoredButtonContainer onClick={() => onClick()}>
                    {children}
                </ColoredButtonContainer>
            );
            break;
        }
        case BUTTON_TYPES?.OUTLINED: {
            break;
        }
        case BUTTON_TYPES?.TRANSPARENT: {
            const TransparentButtonContainer = styled.button`
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: ${themeContext?.cssProperties?.transition?.medium};
                border: 0;
                background: transparent;
                border-radius: 32px;
                width: ${buttonContainerWidth};
                margin: ${themeContext?.cssProperties?.margin?.none};
                padding: ${themeContext?.cssProperties?.padding?.none};
                &:hover {
                    background: ${themeContext?.palette?.gray?.light};
                    transition: ${themeContext?.cssProperties?.transition
                        ?.medium};
                }
            `;
            button = (
                <TransparentButtonContainer onClick={() => onClick()}>
                    {children}
                </TransparentButtonContainer>
            );
            break;
        }
        default: {
            break;
        }
    }

    return button;
};

export default Button;
