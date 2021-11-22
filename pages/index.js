import axios from 'axios';
import tw, { styled } from 'twin.macro';
import { useForm } from 'react-hook-form';
import { server } from '../config/settings';
import { useState, useEffect } from 'react';
import ComingSoon from '../components/ComingSoon';

//######### Components Styles #################
const Container = tw.div`flex flex-col w-full justify-center items-center mb-10`;

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
  const [message, setMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitForm = async (data) => {
    let config = {
      method: 'post',
      url: `${server}/api/signup`,
      headers: {
        'Content-Type': 'application/json',
      },

      data,
    };

    try {
      setMessage(null);
      const response = await axios(config);
    } catch (error) {
      setMessage(error.message);
    }
  };

  useEffect(() => {});
  return (
    <Container>
      <ComingSoon />
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
                  message: 'An email address is required',
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
        {message && <ErrorSpan>&#9888; {message}</ErrorSpan>}
        <NotifyButton type='submit' onClick={handleSubmit(onSubmitForm)}>
          Notify Me
        </NotifyButton>
      </NotifyContainer>
    </Container>
  );
}

//######### Component Functions #################

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api`);
  const wokeup = await res.json();

  return {
    props: {
      wokeup,
    },
  };
};

/*
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';


const [isLoading, setIsLoading] = useState(false);

setIsLoading(true);

  useEffect(() => {}, [isLoading]);

{isLoading ? (
  <Loader />
) : (

  )}

*/
