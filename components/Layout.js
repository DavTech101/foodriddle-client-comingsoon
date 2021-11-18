import Meta from './Meta';
import tw, { styled } from 'twin.macro';
import Footer from './Footer';
import Header from '../components/Header';

//######### Component Styles #################
const PageContainer = tw.div`flex flex-row`;
const ImageContainer = styled.img`
  ${tw`w-0 h-0`}
  ${tw`lg:flex-1 lg:h-full lg:object-contain lg:bg-fr3`}
`;
const BodyContainer = tw.div`lg:flex-1 w-full min-h-screen h-screen py-6 px-0.5 flex flex-col 
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
        <ImageContainer src='./bgimg.png' alt='background image food riddle' />
      </PageContainer>
    </>
  );
};

export default Layout;

//
//
