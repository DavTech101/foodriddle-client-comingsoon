import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

//######### Component Styles #################

const CustomStyles = createGlobalStyle`
  body {
    background: url(./image.png) no-repeat center center fixed; 
    ${tw`bg-cover`}
  }
`;

//######### Component #################

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
