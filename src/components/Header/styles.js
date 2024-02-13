import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;
    
    width: 100%;
    height: 116px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    display: flex;
    justify-content: space-between;

    > strong {
        font-size: 24px;
        
        color: ${({theme}) => theme.COLORS.PINK};
        
        margin: 42px 64px 42px 124px ;
    }

    > input {
        width: 840px;
        height: 56px;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.WHITE};

        
        margin-top: 30px;
        padding: 19px;

        border: none;
        border-radius: 10px;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        }

    }
`;


export const Profile = styled.div`
    display: flex;
    align-items: center;

    margin-left: 64px;

    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        margin-right: 124px;
    }

    > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        line-height: 24px;
        margin-right: 8px;

        span {
            color: ${({theme}) => theme.COLORS.WHITE};
        }

        button {
            display: flex;
            flex-direction: row-reverse;
            background: none;
            border: none;
            color: ${({theme}) => theme.COLORS.BACKGROUND_600};

        }
    }
`;