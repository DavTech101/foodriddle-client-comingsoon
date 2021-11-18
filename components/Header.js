import tw, { styled } from 'twin.macro';

//######### Component Styles #################
const HeaderContainer = tw.div`flex flex-col justify-center items-center mb-3`;

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
      <Title>{title}</Title>
      <Description>{description}</Description>
    </HeaderContainer>
  );
};

export default Header;
