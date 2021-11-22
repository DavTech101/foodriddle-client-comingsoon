import tw, { styled } from 'twin.macro';

const SoonContainer = styled.div`
  ${tw`flex flex-col items-center mt-2 mb-16 px-4`}

  p {
    ${tw`sm:w-5/6 text-2xl text-center font-normal font-comforter antialiased`};
  }
`;

const ComingSoon = () => {
  return (
    <SoonContainer>
      <p>
        <span> Are you a food lover?</span> <br /> <br /> <br />
        🥳 Soon we will launch! 🥳
        <br /> <br />
        Enter your email in the box below to get notified when we ultimately do!
      </p>
    </SoonContainer>
  );
};

export default ComingSoon;
