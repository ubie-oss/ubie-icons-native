import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgYenIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16M8.293 7.293a1 1 0 0 1 1.414 0l2.406 2.406 2.404-2.402A1 1 0 1 1 15.93 8.71l-2.103 2.102h1.396a1 1 0 0 1 0 2H13.11V14h2.113a1 1 0 0 1 0 2H13.11v1l-.005.102a1 1 0 0 1-1.99 0L11.111 17v-1H9l-.103-.005a1 1 0 0 1 0-1.99L9 14h2.111v-1.187H9l-.103-.004a1 1 0 0 1 0-1.99L9 10.812h1.4L8.292 8.708a1 1 0 0 1 0-1.414"
    />
  </Svg>
);
export default SvgYenIcon;
