import React from 'react';

import { Container }  from './Styles';

const Content: React.FC = ({ children }) => (
    <Container>
        {children}
    </Container>
);

export default Content;