import tw, { styled } from 'twin.macro';

//######### Components Styles #################

const Container = tw.div`flex flex-col w-full justify-center items-center mb-10 `;

const SoonContainer = styled.div`
  ${tw`flex flex-col items-center mt-2 mb-16 px-4`}

  p {
    ${tw`sm:w-5/6 text-2xl text-center font-normal font-sans antialiased`};
  }
`;

const NotifyContainer = tw.div`flex flex-col sm:flex-row items-center`;

const InputField = styled.input`
  ${tw`bg-gray-200 text-gray-500 px-6 py-2 rounded-full 
        sm:mr-4 focus:outline-none border-2 border-opacity-100`}
  border-color: coral;
`;

const NotifyButton = styled.button`
  ${tw`mt-3 sm:mt-0 p-2 sm:px-6 sm:py-3 rounded-full 
        w-1/2 sm:w-full sm:rounded-full text-gray-50`}
  ${tw`hover:from-blue-500 hover:to-green-400`}
  ${tw`bg-gradient-to-r from-green-400 
      to-blue-500 focus:from-pink-500 focus:to-yellow-500`}
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
