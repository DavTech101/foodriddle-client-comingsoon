import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

//######### Component Styles #################

const IconsContainer = styled.span`
  ${tw`m-1 w-full px-4 py-2 grid grid-flow-col justify-center text-3xl`}
  padding: 3rem;
`;

const IconsCircle = styled.span`
  ${tw`relative bg-red-200 rounded-full justify-center items-center text-center p-2 
        shadow-xl text-red-coral my-2 mx-3`}
  padding: 3rem;

  &:hover {
    ${tw`bg-gradient-to-r from-blue-500 hover:to-green-400 cursor-pointer`}
    ${tw`text-gray-50`}
  }
`;

//######### Components  #################

const SocialIcons = () => {
  const socials = [
    [<AiFillInstagram />, 'https://www.instagram.com/cositomaine'],
    [<AiFillYoutube />, 'https://www.youtube.com/c/CositosKitchen'],
  ];
  return (
    <IconsContainer>
      {socials.map((social) => (
        <Link key={social[1]} href={social[1]}>
          <IconsCircle>{social[0]}</IconsCircle>
        </Link>
      ))}
    </IconsContainer>
  );
};

export default SocialIcons;
