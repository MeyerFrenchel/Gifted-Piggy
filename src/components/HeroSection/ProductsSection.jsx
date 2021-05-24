import React from 'react';

import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './ProductSection-SC';
import MugPic from '../../assets/canita.jpg';
import ShadowBoxPic from '../../assets/tablou.jpg';
import OthersPic from '../../assets/diverse-2.jpg';
import { Button } from '../Button/Button';

function ProductSection() {
  return (
    
      <PricingSection id='produse'>
        <PricingWrapper>
          <PricingHeading>Produse</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon src={MugPic}/>
                  
                
                <PricingCardPlan>Canite</PricingCardPlan>
                <PricingCardLength>de la</PricingCardLength>
                <PricingCardCost>80lei</PricingCardCost>
                
                <PricingCardFeatures>
                  <PricingCardFeature>3 zile</PricingCardFeature>
                  <PricingCardFeature>Personalizare</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button>SHop NOW</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon src={ShadowBoxPic}>
                
                </PricingCardIcon>
                <PricingCardPlan>Tablouri</PricingCardPlan>
                <PricingCardLength>de la</PricingCardLength>
                <PricingCardCost>150lei</PricingCardCost>
                
                <PricingCardFeatures>
                  <PricingCardFeature>1000 New Users</PricingCardFeature>
                  <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button>SHop NOW</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon src={OthersPic}>
                
                </PricingCardIcon>
                <PricingCardPlan>Diverse</PricingCardPlan>
                <PricingCardLength>de la</PricingCardLength>
                <PricingCardCost>30lei</PricingCardCost>

                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button>SHop NOW</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    
  );
}
export default ProductSection;