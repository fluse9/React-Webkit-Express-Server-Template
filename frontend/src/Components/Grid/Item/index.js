import React from 'react';
import styled from 'styled-components';

const Item = ({
    size = 12,
    spacing = 0,
    justifyContent = 'center',
    alignItems = 'center',
    children,
}) => {
    const StyledItem = styled.div`
        display: flex;
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        width: calc(${(size / 12) * 100}% - ${4 * spacing}px);
    `;

    return <StyledItem>{children}</StyledItem>;
};

export default Item;
