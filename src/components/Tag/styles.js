import styled from 'styled-components';

export const Container = styled.span`
    height: 30px;
    
    display: flex;
    align-items: center;

    font-size: 12px;
    
    padding: 8px 16px;
    
    border-radius: 8px;
    
    margin-right: 8px;
    margin-top: 40px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
`;