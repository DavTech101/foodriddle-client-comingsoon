import axios from 'axios';
import tw, { styled } from 'twin.macro';
import { useForm } from 'react-hook-form';
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';
import SoonDescription from '../components/SoonDescription';
import SignupSuccessful from '../components/SignupSuccessful';

//######### Components Styles #################
const Container = tw.div`flex flex-col w-full justify-center items-center mb-10`;

const NotifyContainer = tw.div`flex flex-col items-center`;

const InputContainer = tw.div`relative`;

const InputShadow = styled.div`
  ${tw`absolute -inset-0.5 rounded-full blur-lg opacity-75`}
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
export default function Home(props) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitForm = async (data) => {
    let config = {
      method: 'post',
      url: `/api/signup`,
      headers: {
        'Content-Type': 'application/json',
      },

      data,
    };

    try {
      setMessage(null);
      setIsLoading(true);

      const response = await axios(config);
      setIsLoading(false);
      setSignupSuccess(true);
    } catch (error) {
      setIsLoading(false);
      setMessage(error.response.data.message);
    }
  };

  // ############# Render component each time values changes
  useEffect(() => {}, [isLoading, message, signupSuccess]);

  return (
    <Container>
      <SoonDescription />
      {signupSuccess ? (
        <SignupSuccessful />
      ) : isLoading ? (
        <Loader />
      ) : (
        <NotifyContainer>
          <InputContainer className='group'>
            <InputShadow></InputShadow>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <EmailField
                type='email'
                name='email'
                {...register('email', {
                  required: {
                    value: true,
                    message: 'An email address is required',
                  },
                  maxLength: {
                    value: 120,
                    message: 'This email address is too long',
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message:
                      'This value does not match an email address format',
                  },
                })}
                placeholder='Enter email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </form>
          </InputContainer>
          {errors.email && (
            <ErrorSpan>&#9888; {errors.email.message}</ErrorSpan>
          )}
          {message && <ErrorSpan>&#9888; {message}</ErrorSpan>}
          <NotifyButton type='submit' onClick={handleSubmit(onSubmitForm)}>
            Notify Me
          </NotifyButton>
        </NotifyContainer>
      )}
    </Container>
  );
}

//######### Component Functions #################

export const getStaticProps = async () => {
  let message = '';

  try {
    const server = await fetch(`${process.env.SERVER_WEBSITE}`);
    message += `Server responded with status ${server.status}`;
  } catch {
    message += 'Server malfunctioning';
  }

  return {
    props: {
      message,
    },
  };
};
