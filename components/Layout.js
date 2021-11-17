import Meta from './Meta';
import tw from 'twin.macro';
import SocialIcons from './SocialIcons';

//######### Component Styles #################

const BodyContainer = tw.div`min-h-screen h-screen py-0 px-0.5 flex flex-col 
                            justify-start items-center bg-red-50`;

const Main = tw.main`py-10 px-0 flex-1 flex flex-col justify-start items-center`;

const Footer = tw.footer`w-full h-12 flex justify-center items-center text-gray-500`;

//######### Components #################

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <BodyContainer>
        <Main>{children}</Main>
        <Footer>
          <SocialIcons />
          <p>
            Copyright &copy; {new Date().getFullYear()} by DavTech. All rights
            reserved
          </p>
        </Footer>
      </BodyContainer>
    </>
  );
};

export default Layout;
