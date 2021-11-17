import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

//######### Component Styles #################

const IconsContainer = styled.span`
  ${tw`m-1 w-full px-4 py-2 flex flex-row justify-center text-3xl`}
`;

const IconsCircle = styled.span`
  ${tw`relative bg-purple-200 rounded-full 
        flex justify-center items-center text-center p-2 
        shadow-xl text-purple-600 my-2 mx-3`}

  &:hover {
    ${tw`bg-purple-400 text-purple-800 cursor-pointer`}
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
        <Link href={social[1]}>
          <IconsCircle key={social[0]}>{social[0]}</IconsCircle>
        </Link>
      ))}
    </IconsContainer>
  );
};

export default SocialIcons;
