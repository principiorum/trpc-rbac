import { HTMLAttributes } from 'react';

import { cx } from 'class-variance-authority';

type FieldInfoProps = HTMLAttributes<HTMLSpanElement> & {
  type?: 'error' | 'notes';
};

export const FieldInfo: React.FC<FieldInfoProps> = ({
  className,
  children,
  type,
  ...props
}) => {
  return (
    <span
      className={cx(
        'mt-1 block text-xs',
        type === 'error' ? 'text-red-500' : '',
        type === 'notes' ? 'text-gray-500' : '',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
