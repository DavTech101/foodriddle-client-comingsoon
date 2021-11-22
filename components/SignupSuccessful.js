import tw from 'twin.macro';
import { FaCheckCircle } from 'react-icons/fa';

const SuccessContainer = tw.div`flex flex-col items-center text-center text-lg font-semibold text-green-500`;
const CheckContainer = tw.p`m-3 text-2xl`;

const SignupSuccesful = () => {
  return (
    <SuccessContainer>
      <CheckContainer>
        <FaCheckCircle />
      </CheckContainer>
      <p>Thank you for signing up.</p>
      <p>We will reach out to you soon enough!</p>
    </SuccessContainer>
  );
};

export default SignupSuccesful;
