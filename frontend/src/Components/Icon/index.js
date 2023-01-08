import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faBars,
    faCaretUp,
    faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../Contexts';

const ICONS = {
    magnifyingGlass: faMagnifyingGlass,
    bars: faBars,
    caretUp: faCaretUp,
    caretDown: faCaretDown,
};

const ICON_SIZES = {
    XS: 'XS',
    S: 'S',
    M: 'M',
    L: 'L',
    XL: 'XL',
};

const Icon = ({
    name = '',
    size = 'M',
    container = false,
    containerColor = 'transparent',
    containerBoxShadow = false,
    iconColor = 'black',
}) => {
    const themeContext = React.useContext(ThemeContext);
    const [iconContainerWidth, setIconContainerWidth] = React.useState('0px');
    const IconContainer = container
        ? styled.div`
              display: flex;
              justify-content: center;
              align-items: center;
              background: ${containerColor};
              width: ${iconContainerWidth};
              height: auto;
              border-radius: ${iconContainerWidth};
              padding: ${themeContext?.cssProperties?.padding?.medium};
              box-shadow: ${
                  containerBoxShadow
                      ? `${themeContext?.cssProperties?.boxShadow?.light};`
                      : '0px'
              }
              transition: ${themeContext?.cssProperties?.transition?.medium};
              &:hover {
                box-shadow: ${
                    containerBoxShadow
                        ? `${themeContext?.cssProperties?.boxShadow?.lightHover};`
                        : '0px'
                }
                transition: ${themeContext?.cssProperties?.transition?.medium};
              }
          `
        : styled.div``;

    const handleState = () => {
        switch (size) {
            case ICON_SIZES?.XS: {
                setIconContainerWidth('16px');
                break;
            }
            case ICON_SIZES?.S: {
                setIconContainerWidth('24px');
                break;
            }
            case ICON_SIZES?.M: {
                setIconContainerWidth('32px');
                break;
            }
            case ICON_SIZES?.L: {
                setIconContainerWidth('48px');
                break;
            }
            case ICON_SIZES?.XL: {
                setIconContainerWidth('64px');
                break;
            }
            default: {
                break;
            }
        }
    };

    React.useEffect(() => {
        handleState();
    });

    return (
        <IconContainer>
            <FontAwesomeIcon icon={ICONS[name]} color={iconColor} />
        </IconContainer>
    );
};

export default Icon;
