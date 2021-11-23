import tw, { styled } from 'twin.macro';

const SoonContainer = styled.div`
  ${tw`flex flex-col justify-between items-center text-center mt-2 mb-16 px-4`}

  h1 {
    ${tw`font-comforter text-3xl font-bold mb-16 leading-snug`};
  }

  p {
    ${tw`w-11/12 mt-3 text-xl font-thin leading-normal antialiased`};
  }
`;

const SoonDescription = () => {
  return (
    <SoonContainer>
      <h1> Are you a food lover?</h1>

      <p>🥳 Soon we will launch! 🥳</p>
      <p>
        Enter your email in the box below to get notified when we ultimately do!
      </p>
    </SoonContainer>
  );
};

export default SoonDescription;
