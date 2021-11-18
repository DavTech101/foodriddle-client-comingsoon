import tw, { styled } from 'twin.macro';

//######### Components Styles #################

const Container = tw.div`flex flex-col w-full justify-center items-center mb-10`;

const SoonContainer = styled.div`
  ${tw`flex flex-col items-center mt-2 mb-16 px-4`}

  p {
    ${tw`sm:w-5/6 text-2xl text-center font-normal font-sans`};
  }
`;

const NotifyContainer = tw.div`flex flex-col sm:flex-row items-center`;

const InputField = styled.input`
  ${tw`bg-gray-200 text-gray-500 px-6 py-2 rounded-full 
        sm:mr-4 focus:outline-none border-2 border-opacity-100`}
  border-color: coral;
`;

const NotifyButton = styled.button`
  ${tw`mt-3 sm:mt-0 p-2 sm:px-6 sm:py-3 rounded-full w-1/2 sm:w-full sm:rounded-full text-gray-50`}

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
    <Container>
      <SoonContainer>
        <p>
          🥳 Soon we will launch! 🥳
          <br /> <br /> <br />
          Enter your e-mail in the box below to get notified when we ultimately
          do!
        </p>
      </SoonContainer>

      <NotifyContainer>
        <InputField type='email' placeholder='Enter email address' />
        <NotifyButton onClick={() => console.log('clicked')}>
          Notify Me
        </NotifyButton>
      </NotifyContainer>
    </Container>
  );
}
