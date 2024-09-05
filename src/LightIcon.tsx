import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgLightIcon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.5 18.866A1 1 0 0 1 8 18c0-1.227-.406-2.504-.906-3.577-.134-.287-.298-.598-.487-.956l-.085-.162c-.22-.417-.462-.882-.684-1.378C5.395 10.942 5 9.774 5 8.5 5 5.506 7.391 2 12 2c4.608 0 7 3.506 7 6.5 0 1.274-.395 2.441-.838 3.427a24 24 0 0 1-.683 1.378l-.086.162c-.189.358-.353.669-.487.956-.5 1.072-.906 2.35-.906 3.577a1 1 0 0 1-.5.866V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zM7 8.5C7 6.494 8.609 4 12 4s5 2.494 5 4.5c0 .869-.271 1.737-.662 2.608-.195.434-.411.852-.629 1.265l-.083.157c-.186.353-.376.712-.532 1.047-.45.963-.875 2.156-1.03 3.423H9.936c-.156-1.267-.582-2.46-1.03-3.423-.157-.335-.347-.694-.533-1.047l-.083-.157a22 22 0 0 1-.629-1.264C7.272 10.237 7 9.369 7 8.5M10.5 19v1h3v-1z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgLightIcon;
