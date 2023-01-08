import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../../Contexts';

const Card = ({
    backgroundColor,
    width = '100%',
    height = 'auto',
    children,
}) => {
    const themeContext = React.useContext(ThemeContext);

    const StyledCard = styled.div`
        background-color: ${backgroundColor};
        width: ${width};
        height: ${height};
        border-radius: 32px;
        box-shadow: ${themeContext?.cssProperties?.boxShadow?.light};
        padding: 0px;
        overflow: hidden;
        cursor: pointer;
    `;

    return <StyledCard>{children}</StyledCard>;
};

export default Card;
