import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: var(--clr-primary-3);
`;

export const FooterWrap = styled.div`
    padding: 48px 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    
    color: #fff;
    font-size: 18px;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;
export const FooterSocialItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 16px;
    text-align: left;
    
    color: var(--clr-primary-1);
    font-size: 18px;
    gap: 15px;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLink = styled(Link)`
    color: var(--clr-primary-1);
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 24px;

    &:hover {
        color: var(--clr-primary-1);
        transition: 0.3s ease-out;
    }
`;