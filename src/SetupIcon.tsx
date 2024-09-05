import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgSetupIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.055 2.804A.99.99 0 0 1 11.018 2h1.964c.469 0 .872.336.963.804l.523 2.66c.6.236 1.16.554 1.666.943l2.496-.96a.97.97 0 0 1 1.18.406l1.04 1.696c.249.404.182.93-.159 1.258l-1.94 1.861a7.2 7.2 0 0 1 0 2.664l1.94 1.861c.341.327.408.854.16 1.258l-1.042 1.696a.97.97 0 0 1-1.18.406l-2.494-.96a6.8 6.8 0 0 1-1.667.942l-.523 2.661a.99.99 0 0 1-.963.804h-1.964a.99.99 0 0 1-.964-.804l-.522-2.66a6.8 6.8 0 0 1-1.666-.942l-2.496.96a.97.97 0 0 1-1.18-.406l-1.04-1.696a1.01 1.01 0 0 1 .159-1.258l1.94-1.862a7.2 7.2 0 0 1 0-2.664l-1.94-1.861a1.01 1.01 0 0 1-.16-1.258L4.19 5.853a.97.97 0 0 1 1.18-.406l2.495.96a6.8 6.8 0 0 1 1.667-.943zM12 16c2.17 0 3.929-1.79 3.929-4s-1.76-4-3.93-4-3.928 1.79-3.928 4S9.83 16 12 16"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSetupIcon;
