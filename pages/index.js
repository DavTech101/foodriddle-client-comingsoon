import tw, { styled } from 'twin.macro';
import { useForm } from 'react-hook-form';
import { server } from '../config/settings';

//######### Components Styles #################

const Container = tw.div`flex flex-col w-full justify-center items-center mb-10`;

const SoonContainer = styled.div`
  ${tw`flex flex-col items-center mt-2 mb-16 px-4`}

  p {
    ${tw`sm:w-5/6 text-2xl text-center font-normal font-comforter antialiased`};
  }
`;

const NotifyContainer = tw.div`flex flex-col items-center`;

const InputContainer = tw.div`relative`;
const InputShadow = styled.div`
  ${tw`absolute -inset-0.5 rounded-full blur-md opacity-75`}
  ${tw`bg-gradient-to-r from-red-coral to-yellow-500`}
  ${tw`group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`}
`;

const EmailField = styled.input`
  ${tw`relative bg-gray-200 text-gray-500 px-6 py-2 rounded-full`}
  ${tw`sm:mr-4 focus:outline-none border-2 border-opacity-100`}
  border-color: coral;
`;

const ErrorSpan = tw.span`mt-2 italic text-sm text-red-400`;

const NotifyButton = styled.button`
  ${tw`mt-7 p-2 text-gray-50 rounded-full w-1/2`}
  ${tw`bg-gradient-to-r from-green-400 to-blue-500`}
  ${tw`hover:from-blue-500 hover:to-green-400`}
`;

//######### Components #################

export default function Home({ wokeup }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitForm = (values) => {
    console.log(values);
  };

  return (
    <Container>
      {console.log(wokeup)}
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
            <EmailField
              type='email'
              name='email'
              {...register('email', {
                required: {
                  value: true,
                  message: 'The email address is required',
                },
                maxLength: {
                  value: 120,
                  message: 'This email address is too long',
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'This value does not match an email address format',
                },
              })}
              placeholder='Enter email address'
            />
          </form>
        </InputContainer>
        {errors.email && <ErrorSpan>&#9888; {errors.email.message}</ErrorSpan>}
        <NotifyButton type='submit' onClick={handleSubmit(onSubmitForm)}>
          Notify Me
        </NotifyButton>
      </NotifyContainer>
    </Container>
  );
}

//######### Component Functions #################

export const getStaticProps = async () => {
  const res = await fetch(`${server}/`);
  const wokeup = await res.json();

  return {
    props: {
      wokeup,
    },
  };
};
