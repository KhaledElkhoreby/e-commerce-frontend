// @ts-ignore
import themes from 'daisyui/src/colors/themes';
import { Dispatch, SetStateAction } from 'react';
import { ISize } from '../../interfaces/Product/IProduct';

interface IProps {
  sizes: Array<ISize>;
  onChangeSizeStateHandler: Dispatch<SetStateAction<ISize | undefined>>;
  currentSizeState: ISize | undefined;
  boxSize?: number;
  className?: string;
}

export default function SwitchSizes({
  sizes,
  onChangeSizeStateHandler,
  currentSizeState,
  boxSize = 9,
  className,
}: IProps) {
  return (
    <div
      className={`flex flex-wrap justify-center lg:justify-start items-center gap-1 ${className}`}
    >
      {sizes.map((z) => (
        <button
          key={z.size}
          className={`btn btn-xs btn-outline rounded-none font-normal min-h-0 h-[auto] p-2 border border-gray-300 text-gray-600`}
          onClick={() => onChangeSizeStateHandler(z)}
          style={{
            padding: boxSize,
            minWidth: `${boxSize + 20}px`,
            outline:
              z.size === currentSizeState?.size
                ? 'solid 1.65px black'
                : themes['[data-theme=light]']['neutral-100'],
          }}
        >
          {z.size}
        </button>
      ))}
    </div>
  );
}
