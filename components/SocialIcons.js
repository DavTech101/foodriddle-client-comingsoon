import React from 'react';
import { uuid } from 'uuidv4';
import tw, { styled } from 'twin.macro';
import { AiFillInstagram } from 'react-icons/ai';

const IconsContainer = styled.span`
  ${tw`m-1 w-full px-4 py-2 flex flex-row justify-center text-3xl`}
`;

const IconsCircle = styled.span`
  ${tw`relative bg-purple-200 rounded-full 
        flex justify-center items-center text-center p-2 
        shadow-xl text-purple-600 m-1`}

  &:hover {
    ${tw`bg-purple-400 text-purple-800`}
  }
`;

const SocialIcons = () => {
  const socials = [
    <AiFillInstagram />,
    <AiFillInstagram />,
    <AiFillInstagram />,
  ];
  return (
    <IconsContainer>
      {socials.map((social) => (
        <IconsCircle key={uuid()}>{social}</IconsCircle>
      ))}
    </IconsContainer>
  );
};

export default SocialIcons;
