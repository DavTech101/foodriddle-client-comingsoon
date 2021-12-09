import tw from 'twin.macro';
import SocialIcons from './SocialIcons';

//######### Component Styles #################

const FooterContainer = tw.footer`w-full h-12 mb-20  justify-center items-center 
                                text-gray-500  text-center`;

//######### Components #################

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <SocialIcons />
        <p>
          Copyright &copy; {new Date().getFullYear()} by DavTech. All rights
          reserved
        </p>
      </FooterContainer>
    </>
  );
};

export default Footer;
