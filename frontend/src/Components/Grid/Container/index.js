import React from 'react';
import styled from 'styled-components';

const Container = ({
    direction = 'row',
    wrap = 'wrap',
    justifyContent = 'center',
    alignItems = 'center',
    spacing = 0,
    width = '0px',
    padding = '0px',
    children,
}) => {
    const StyledContainer = styled.div`
        display: flex;
        flex-flow: ${direction} ${wrap};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        gap: ${4 * spacing}px;
        width: ${width};
        padding: ${padding};
    `;

    return (
        <StyledContainer>
            {React.Children?.map(children, (child) => {
                if (!React.isValidElement(child)) return null;

                return React.cloneElement(child, {
                    ...child.props,
                    spacing: spacing,
                });
            })}
        </StyledContainer>
    );
};

export default Container;
