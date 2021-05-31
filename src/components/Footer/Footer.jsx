import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLink,
    FooterSocialItems
} from './Footer-SC';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLink to='/contact'>
                        CONTACT
                        </FooterLink>
                        <FooterLink to='/terms'>
                        TERMENI DE FOLOSINTA
                        </FooterLink>
                        <FooterLink to='/aboutfimo'>
                        CE ESTE LUTUL POLIMERIC?
                        </FooterLink>
                    </FooterLinksItems>

                    <FooterSocialItems>
                        <FooterLink to='/contact'>
                        <i className="fab fa-facebook fa-2x"></i>
                        </FooterLink>
                        <FooterLink to='/terms'>
                        <i className="fab fa-instagram fa-2x"></i>
                        </FooterLink>
                        <FooterLink to='/aboutfimo'>
                        <i className="fab fa-whatsapp fa-2x"></i>
                        </FooterLink>
                        <FooterLink to='/aboutfimo'>
                        <i className="fab fa-tiktok fa-2x"></i>
                        </FooterLink>
                    </FooterSocialItems>
                </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
