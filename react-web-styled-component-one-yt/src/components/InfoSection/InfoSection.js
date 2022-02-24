import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../GlobalStyles';
import { 
  Infosec, 
  InfoRow, 
  InfoColumn, 
  TextWrapper,
  TopLine,
  Heading,
  SubTitle, 
  ImgWrapper,
  Img
 } from './InfoSection.element';

const InfoSection = ({
  lightBg, 
  imgStart, 
  lightTopLine, 
  TopLineText, 
  lightTextDesc, 
  buttonLabel, 
  description,
  lightText,
  headline,
  primary,
  start,
  img,
  alt

}) => {
  return (
    <>
      <Infosec lightBg={lightBg}> 
      <Container>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>
                 <TopLine lightTopLine={lightTopLine}>{TopLineText}</TopLine>
                 <Heading lightText={lightText}>{headline}</Heading>
                 <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                 <Link to="/sign-Up">
                 <Button big fontBig primary={primary}>{buttonLabel}</Button>
                  </Link>
            </TextWrapper>
          </InfoColumn>
          <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>
       </Infosec>
    </>
  )
}
 
export default InfoSection;