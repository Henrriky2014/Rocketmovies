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
        overflow-y: auto;
        align-items: center;
        padding: 64px 0;


        
    }

    > svg {
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Content = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
        width: 8px;
        height: 24px;
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

    > div {
        display: flex;
        align-items: center;
        h1 {
            font-size: 36px;
            font-weight: 500;
        }
    }

    > .created_at {
        margin-top: 24px;
        img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
        }
        gap: 1.5px;
        svg {
            margin: 0 8px;
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }

    > p {
        margin-top: 40px;
        text-align: justify;
        line-height: 1.6;
        margin-bottom: 20px;
    }

`;

export const Stars = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-left: 18px;

    > svg {
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;
