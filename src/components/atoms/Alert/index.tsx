import { HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cAlert = cva(
  ['px-3', 'py-2', 'text-sm', 'rounded-md', 'border', 'border-opacity-20'],
  {
    variants: {
      color: {
        primary: ['bg-indigo-100', 'text-indigo-700', 'border-indigo-700'],
        warning: ['bg-amber-100', 'text-amber-700', 'border-amber-700'],
        success: ['bg-emerald-100', 'text-emerald-700', 'border-emerald-700'],
        neutral: ['bg-neutral-100', 'text-neutral-700', 'border-neutral-700'],
        error: ['bg-red-100', 'text-red-700', 'border-red-700'],
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  }
);

export type AlertProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cAlert>;

export const Alert: React.FC<AlertProps> = ({
  className,
  children,
  color,
  ...props
}) => {
  return (
    <div
      className={cAlert({
        color,
        className,
      })}
      {...props}
    >
      {children}
    </div>
  );
};
