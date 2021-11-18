import Meta from './Meta';
import tw from 'twin.macro';
import Footer from './Footer';
import Header from '../components/Header';

//######### Component Styles #################
const BodyContainer = tw.div`min-h-screen h-screen py-0 px-0.5 flex flex-col 
                            justify-start items-center bg-white`;

const Main = tw.main`py-10 px-0 flex flex-col justify-center items-center`;

//######### Components #################
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <BodyContainer>
        <Header
          title='Riddle'
          description='Solving food riddles like no tomorrow.'
        />
        <Main>{children}</Main>
        <Footer />
      </BodyContainer>
    </>
  );
};

export default Layout;
