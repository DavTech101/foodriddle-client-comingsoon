import tw, { styled } from 'twin.macro';

//######### Components Styles #################

const Container = tw.div`flex flex-col w-full justify-center items-center mb-10`;

const SoonContainer = styled.div`
  ${tw`flex flex-col items-center mt-2 mb-16 px-4`}

  p {
    ${tw`sm:w-5/6 text-2xl text-center font-normal font-comforter antialiased`};
  }
`;

const NotifyContainer = tw.div`flex flex-col sm:flex-row items-center`;

const InputContainer = tw.div`relative`;
const InputShadow = styled.div`
  ${tw`absolute -inset-0.5 rounded-full blur-md opacity-75`}
  ${tw`bg-gradient-to-r from-red-coral to-yellow-500`}
  ${tw`group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`}
`;

const InputField = styled.input`
  ${tw`relative bg-gray-200 text-gray-500 px-6 py-2 rounded-full`}
  ${tw`sm:mr-4 focus:outline-none border-2 border-opacity-100`}
  border-color: coral;
`;

const NotifyButton = styled.button`
  ${tw`mt-7 sm:mt-0 p-2 sm:px-6 sm:py-3 text-gray-50`}
  ${tw`rounded-full w-1/2 sm:w-full sm:rounded-full`}
  ${tw`bg-gradient-to-r from-green-400 to-blue-500`}
  ${tw`hover:from-blue-500 hover:to-green-400`}
  ${tw`focus:from-pink-500 focus:to-yellow-500`}
`;

//######### Components #################

export default function Home({ restaurants }) {
  return (
    <Container>
      <SoonContainer>
        <p>
          <span> Are you a food lover?</span> <br /> <br /> <br />
          🥳 Soon we will launch! 🥳
          <br /> <br />
          Enter your email in the box below to get notified when we ultimately
          do!
        </p>
      </SoonContainer>

      <NotifyContainer>
        <InputContainer className='group'>
          <InputShadow></InputShadow>
          <form>
            <InputField
              type='email'
              placeholder='Enter email address'
              name='signupfield'
            />
          </form>
        </InputContainer>
        <NotifyButton onClick={() => console.log('clicked')}>
          Notify Me
        </NotifyButton>
      </NotifyContainer>
    </Container>
  );
}
