import tw, { styled } from 'twin.macro';

//######### Component Styles #################
const Title = styled.h1`
  ${tw`m-0 text-6xl leading-tight text-center`}

  &:before {
    content: 'Food ';
    color: #0070f3;
  }
`;

const Description = tw.p`text-2xl leading-normal text-center`;

//######### Components #################

const Header = ({ title, description }) => {
  return (
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
  );
};

export default Header;
