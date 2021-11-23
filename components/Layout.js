import Meta from './Meta';
import tw, { styled } from 'twin.macro';
import Footer from './Footer';
import Header from '../components/Header';

//######### Component Styles #################
const PageContainer = tw.div`flex flex-row relative justify-center overflow-hidden`;

const BodyContainer = styled.div`
  ${tw`absolute left-0 py-6 px-0.5 flex flex-col justify-between items-center`}
  ${tw`min-h-screen h-screen frsignup:w-100 overflow-auto`}
  ${tw`bg-white bg-opacity-95 rounded-3xl`}
`;

const Main = tw.main`py-10 px-0 flex flex-col justify-center items-center`;

//######### Components #################
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <PageContainer>
        <BodyContainer>
          <Header description='You have the riddles, we got the solutions!' />
          <Main>{children}</Main>
          <Footer />
        </BodyContainer>
      </PageContainer>
    </>
  );
};

export default Layout;
