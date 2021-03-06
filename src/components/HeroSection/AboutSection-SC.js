import styled from 'styled-components';

export const InfoContainer = styled.div`

    color: #fff;
    background: ${({colorBg}) =>(colorBg ? 'var(--clr-primary-2)' : '#fff')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100vh;
    max-height: 1200px;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    /* justify-content: center; */
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    grid-template-areas: ${({imgStart}) =>(imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: var(--clr-primary-5);
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        font-size: 28px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: var(--clr-primary-4);
`;

export const BtnWrap = styled.div`
    display:flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 700px;
    height: 100%;

    @media screen and (max-width: 768px) {
        max-width: 500px;
    }
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

    
`;