import tw, { styled } from 'twin.macro';

//######### Component Styles #################
const HeaderContainer = tw.div`flex flex-col justify-center items-center`;
const ImageContainer = tw.img`w-1/2 h-32 object-cover`;

const Title = styled.h1`
  ${tw`mb-0 text-6xl leading-tight text-center`}

  &:before {
    content: 'Food ';
    color: #0070f3;
  }
`;

const Description = tw.p`text-xl italic leading-normal text-center`;

//######### Components #################

const Header = ({ title, description }) => {
  return (
    <HeaderContainer>
      <ImageContainer src='./frlogo.png' alt='Food riddle logo' />
      <Description>{description}</Description>
    </HeaderContainer>
  );
};

export default Header;
