import tw, { styled } from 'twin.macro';

//######### Components Styles #################

const Container = tw.div`flex flex-col w-full h-12 justify-center items-center -mt-44`;

const SoonContainer = styled.div`
  ${tw`flex justify-center items-center mb-16 px-4`}

  p {
    ${tw`w-5/6 text-2xl text-center font-medium font-nicely`};
  }
`;

const NotifyContainer = tw.div`flex flex-row justify-center`;
const InputField = styled.input`
  ${tw`bg-gray-200 px-6 rounded-full mr-4 focus:outline-none border-4 border-opacity-100 text-gray-500`}
  border-color: coral;
`;

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
    <Container>
      <SoonContainer>
        <p>
          🥳 Soon we will launch! 🥳 <br />
          <br />
          Enter your e-mail in the box below to get notified when ultimately do!
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
