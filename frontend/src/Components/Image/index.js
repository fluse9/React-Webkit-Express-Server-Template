import React from 'react';
import styled from 'styled-components';

const Image = ({ src, width = 'auto', height = 'auto', margin = '0px' }) => {
    const StyledImage = styled.img`
        display: block;
        width: ${width};
        height: ${height};
        margin: ${margin};
    `;

    StyledImage.defaultProps = {
        src: src,
    };

    return <StyledImage />;
};

export default Image;
