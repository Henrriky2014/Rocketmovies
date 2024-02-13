import styled from 'styled-components';

export const Container = styled.button`
    border: none;
    background: none;
    display: flex;
    align-items: center;
    
    color: ${({theme}) => theme.COLORS.PINK};

    margin-bottom: 24px;
    > p {
        margin-left: 8px;
    }

    > div {
        display: flex;
        line-height: 24px;
    }
`;