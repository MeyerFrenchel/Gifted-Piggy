import React from 'react';
import {
    ServicesContainer,
    ServicesMainTitle,
    ServicesSecondaryTitle,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesText
} from './ServicesSection-SC';
import Icon1 from '../../assets/pig-bank.svg';
import Icon2 from '../../assets/pig-search.svg';
import Icon3 from '../../assets/pig-gift.svg';

const ServicesSection = () => {
    return (
        <ServicesContainer id='servicii'>
            <ServicesMainTitle>#servicii</ServicesMainTitle>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} alt={'Illustration by <a href="https://icons8.com/illustrations/author/5ec7b0e101d0360016f3d1b3">Pixeltrue</a> from <a href="https://icons8.com/illustrations">Ouch!</a>'}/>
                    <ServicesSecondaryTitle>
                    Reduce cheltuielile
                    </ServicesSecondaryTitle>
                    <ServicesText>
                    GiftedPiggy ofera servicii personalizate la preturi accesibile tuturor</ServicesText>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} alt={'Illustration by <a href="https://icons8.com/illustrations/author/5ec7b0e101d0360016f3d1b3">Pixeltrue</a> from <a href="https://icons8.com/illustrations">Ouch!</a>'}/>
                    <ServicesSecondaryTitle>
                        Limiteaza timpul de cautare
                    </ServicesSecondaryTitle>
                    <ServicesText>
                    GiftedPiggy the ajuta sa oferi persoanei dragi cadoul potrivit in cel mai scurt timp </ServicesText>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} alt={'Illustration by <a href="https://icons8.com/illustrations/author/5ec7b0e101d0360016f3d1b3">Pixeltrue</a> from <a href="https://icons8.com/illustrations">Ouch!</a>'}/>
                    <ServicesSecondaryTitle>
                        Surprize frumoase 
                    </ServicesSecondaryTitle>
                    <ServicesText>
                    GidtedPiggy te ajuta sa faci o surpiza unica persoanei dragi creand un cadou personalizat </ServicesText>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default ServicesSection;
