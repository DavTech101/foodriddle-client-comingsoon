import tw, { styled } from 'twin.macro';
import Header from '../components/Header';

//######### Components Styles #################

const SoonContainer = styled.div`
  ${tw`flex flex-col justify-center items-center w-full h-12 my-32 px-4`}

  p {
    ${tw`text-2xl text-center font-medium`};
  }
`;

const NotifyContainer = tw.div`flex flex-row`;
const InputField = tw.input`bg-gray-200 py-3 px-6 rounded-full mr-4 border-transparent`;

const NotifyButton = styled.button`
  ${tw`px-6 py-3 rounded-full text-gray-50`}

  background-image: -webkit-linear-gradient(
    -31deg,
    rgb(86, 204, 242) 0%,
    rgb(47, 128, 237) 100%
  );

  &:hover {
    background-image: -webkit-linear-gradient(
      -31deg,
      rgb(47, 128, 237) 0%,
      rgb(86, 204, 242) 100%
    );
  }
`;

//######### Components #################

export default function Home({ restaurants }) {
  return (
    <>
      <Header
        title='Riddle'
        description='Solving food riddles like no tomorrow'
      />

      <SoonContainer>
        <p>
          Soon we will launch. Enter your e-mail in de box below to get notified
          when we do!
        </p>
      </SoonContainer>

      <NotifyContainer>
        <InputField type='email' placeholder='Enter email address' />
        <NotifyButton>Notify Me</NotifyButton>
      </NotifyContainer>
    </>
  );
}
