import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}
const SvgConditionBad3Icon = (props: ISvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="currentColor"
      d="M13.945 11.832a1 1 0 0 1 1.11-1.664l1.5 1a1 1 0 1 1-1.11 1.664zM10.332 10.445a1 1 0 0 1-.277 1.387l-1.5 1a1 1 0 0 1-1.11-1.664l1.5-1a1 1 0 0 1 1.387.277"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.395 17.447c.214-.428.398-.692.538-.84.101.092.218.208.36.35l.018.018c.174.174.392.392.603.565.11.09.248.193.403.276.144.077.385.184.683.184s.54-.107.683-.184c.155-.083.293-.186.404-.276.21-.173.428-.39.602-.565l.018-.018q.211-.212.36-.35c.14.148.325.412.539.84a1 1 0 1 0 1.789-.894c-.274-.547-.58-1.028-.938-1.385-.359-.36-.848-.668-1.457-.668-.298 0-.54.107-.683.184a2.6 2.6 0 0 0-.403.276c-.211.173-.429.39-.603.565l-.018.018q-.166.167-.293.288a17 17 0 0 1-.293-.288l-.018-.018c-.174-.174-.391-.392-.602-.565a2.6 2.6 0 0 0-.404-.276A1.45 1.45 0 0 0 10 14.5c-.609 0-1.098.309-1.457.668-.357.357-.664.838-.937 1.385a1 1 0 1 0 1.789.894m.674-.957.004-.002h-.001z"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.5 1a1 1 0 0 1 1 1v.63a10 10 0 0 1 1.5.708V2a1 1 0 1 1 2 0v2.859A9.97 9.97 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2q.765 0 1.5.112V2a1 1 0 0 1 1-1M17 5.755V8a1 1 0 0 0 1.994.113A8 8 0 1 1 13.5 4.14V7a1 1 0 1 0 2 0V4.804c.536.262 1.039.581 1.5.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgConditionBad3Icon;
