// @ts-ignore
import themes from 'daisyui/src/colors/themes';
import { FaStarHalfAlt, FaStar, FaRegStar } from 'react-icons/fa';
// @ts-ignore
import ReactStars from 'react-rating-stars-component';

interface IProps {
  size?: number;
  onChange?: Function;
  value?: number;
  readOnly?: boolean;
}

export default function RateStars({
  size,
  onChange,
  value = 3.5,
  readOnly = false,
}: IProps) {
  return (
    <ReactStars
      edit={!readOnly}
      count={5}
      size={size}
      filledIcon={<FaStar />}
      emptyIcon={<FaRegStar />}
      halfIcon={<FaStarHalfAlt />}
      a11y
      isHalf
      value={value}
      onChange={onChange}
      color={themes['[data-theme=light]']['neutral']}
      activeColor={themes['[data-theme=light]']['neutral']}
    />
  );
}
