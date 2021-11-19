import tw, { styled } from 'twin.macro';

//######### Component Styles #################
const HeaderContainer = tw.div`flex flex-col justify-center items-center`;
const ImageContainer = tw.img`w-1/2 h-32 object-cover`;
const Description = tw.p`text-xl italic font-thin leading-normal text-center antialiased`;

//######### Components #################

const Header = ({ description }) => {
  return (
    <HeaderContainer>
      <ImageContainer src='./frlogo.png' alt='Food riddle logo' />
      <Description>{description}</Description>
    </HeaderContainer>
  );
};

export default Header;
