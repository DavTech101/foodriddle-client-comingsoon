import tw, { styled } from 'twin.macro';

const SoonContainer = styled.div`
  ${tw`flex flex-col items-center mt-2 mb-16 px-4`}

  p {
    ${tw`w-11/12 text-lg text-center font-normal antialiased`};

    span {
      ${tw`font-comforter text-2xl font-bold`};
    }
  }
`;

const SoonDescription = () => {
  return (
    <SoonContainer>
      <p>
        <span> Are you a food lover?</span>
        <br /> <br /> <br />
        🥳 <strong>Soon we will launch!</strong> 🥳
        <br />
        <i>
          Enter your email in the box below to get notified when we ultimately
          do!
        </i>
      </p>
    </SoonContainer>
  );
};

export default SoonDescription;
