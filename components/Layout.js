import Meta from './Meta';
import tw, { styled } from 'twin.macro';
import Footer from './Footer';
import Header from '../components/Header';

//######### Component Styles #################
const PageContainer = tw.div`flex flex-row relative justify-center`;

const BodyContainer = tw.div`absolute left-0 sm:w-5/6 md:w-100
                             min-h-screen h-screen py-6 px-0.5 flex flex-col 
                            justify-between items-center bg-white overflow-auto`;

const Main = tw.main`py-10 px-0 flex flex-col justify-center items-center`;

//######### Components #################
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <PageContainer>
        <BodyContainer>
          <Header
            title='Riddle'
            description='You have the riddles, we got the solutions!'
          />
          <Main>{children}</Main>
          <Footer />
        </BodyContainer>
      </PageContainer>
    </>
  );
};

export default Layout;
