import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ThemeContext } from '../../../Contexts';
import Typography from '../../../Typography';
import { Container, Item } from '../../Grid';
import Icon from '../../Icon';
import Button from '../Button';

const Dropdown = ({
    onClick = () => {},
    size,
    width,
    type,
    color,
    text = '',
    items = [],
}) => {
    const themeContext = React.useContext(ThemeContext);
    const [dropdownContainerClassName, setDropdownContainerClassName] =
        React.useState('shrink');

    const shrink = keyframes`
        from {
            height: ${24 * (items?.length || 0) + 8}px;
            border-top: 1px solid ${themeContext?.palette?.gray?.light};
            padding-top: ${themeContext?.cssProperties?.padding?.medium};
        }

        to {
            height: 0;
            border-top: 0px solid ${themeContext?.palette?.gray?.light};
            padding-top: ${themeContext?.cssProperties?.padding?.none};
        }
    `;

    const stretch = keyframes`
        from {
            height: 0;
            border-top: 0px solid ${themeContext?.palette?.gray?.light};
            padding-top: ${themeContext?.cssProperties?.padding?.none};
        }

        to {
            height: ${28 * (items?.length || 0) + 8}px;
            border-top: 1px solid ${themeContext?.palette?.gray?.light};
            padding-top: ${themeContext?.cssProperties?.padding?.medium};
        }
    `;

    const ButtonContainer = styled.div`
        z-index: 1;
        margin-top: ${themeContext?.cssProperties?.margin?.extraLarge};
        width: 100%;
    `;

    const DropdownContainer = styled.div`
        margin-top: ${dropdownContainerClassName === 'stretch'
            ? themeContext?.cssProperties?.margin?.large
            : themeContext?.cssProperties?.margin?.none};
        width: 100%;
        height: 0;
        overflow: hidden;
        border-top: 0px solid ${themeContext?.palette?.gray?.light};
        padding-top: ${themeContext?.cssProperties?.padding?.none};
        &.shrink {
            animation: ${shrink}
                ${themeContext?.cssProperties?.transition?.short} linear 1
                forwards;
        }
        &.stretch {
            animation: ${stretch}
                ${themeContext?.cssProperties?.transition?.short} linear 1
                forwards;
        }
    `;

    const DropdownItemContainer = styled.div`
        margin-top: ${themeContext?.cssProperties?.margin?.small};
        margin-bottom: ${themeContext?.cssProperties?.margin?.small};
    `;

    const handleButtonClick = () => {
        if (dropdownContainerClassName === 'shrink') {
            setDropdownContainerClassName('stretch');
        } else if (dropdownContainerClassName === 'stretch') {
            setDropdownContainerClassName('shrink');
        }
    };

    const handleDropdownItemClick = (item) => {
        onClick(item);
    };

    return (
        <ButtonContainer>
            <Button
                onClick={() => handleButtonClick()}
                size={size}
                width={width}
                type={type}
                color={color}
            >
                <Container
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Item size={10} justifyContent="flex-start">
                        <Typography variant="h6">{text}</Typography>
                    </Item>
                    <Item size={2}>
                        <Icon name="caretDown" />
                    </Item>
                    <Item size={12}>
                        <DropdownContainer
                            className={dropdownContainerClassName}
                        >
                            <Container
                                width="100%"
                                justifyContent="center"
                                alignItems="center"
                            >
                                {items?.map((item) => (
                                    <Item
                                        size={12}
                                        justifyContent="flex-start"
                                        key={item?.key}
                                    >
                                        <DropdownItemContainer
                                            onClick={() =>
                                                handleDropdownItemClick(item)
                                            }
                                        >
                                            <Typography
                                                variant="h6"
                                                hoverColor={
                                                    themeContext?.palette
                                                        ?.primary?.main
                                                }
                                            >
                                                {item?.name}
                                            </Typography>
                                        </DropdownItemContainer>
                                    </Item>
                                ))}
                            </Container>
                        </DropdownContainer>
                    </Item>
                </Container>
            </Button>
        </ButtonContainer>
    );
};

export default Dropdown;
