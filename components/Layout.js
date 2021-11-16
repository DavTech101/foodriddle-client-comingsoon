import Meta from './Meta';
import tw from 'twin.macro';
import Navbar from './Navigation/Navbar';

//######### Component Styles #################

const BodyContainer = tw.div`min-h-screen h-screen py-0 px-0.5 
                        flex flex-col justify-start items-center`;

const Main = tw.main`py-10 px-0 flex-1 flex flex-col justify-start items-center`;

const Footer = tw.footer`w-full h-24 border-t-2 border-gray-faint 
                          flex justify-center items-center`;

//######### Components #################

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <BodyContainer>
        <Main>{children}</Main>
        <Footer>
          <p>Powered by DavTech</p>
        </Footer>
      </BodyContainer>
    </>
  );
};

export default Layout;
