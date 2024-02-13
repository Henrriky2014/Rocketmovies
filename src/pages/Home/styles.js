import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
        align-items: center;
        padding: 64px 0;
    }
    
    
    
    `;

export const Content = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    background-color: red;
    
    > p{
        overflow-y: scroll;
        
        &::-webkit-scrollbar {
                width: 8px;
                height: 96px;
            }
    
            &::-webkit-scrollbar-track {
                background: ${({theme}) => theme.COLORS.BACKGROUND_900};
            }
    
            &::-webkit-scrollbar-thumb {
                background: ${({theme}) => theme.COLORS.PINK};
                border-radius: 8px;
            }
    
            &::-webkit-scrollbar-thumb:hover {
                background: ${({theme}) => theme.COLORS.DARK_PINK};
            }

    }


    display: flex;
    flex-direction: column;

    > h1 {
        font-size: 32px;
    }
`;