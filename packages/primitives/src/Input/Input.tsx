import { forwardRef } from 'react';
import { Input as BaseInput } from '@base-ui/react/input';
import type { InputProps as BaseInputProps } from '@base-ui/react/input';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const inputVariants = cva(
  [
    'w-full rounded-md border',
    'bg-white text-gray-900',
    'placeholder:text-gray-400',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1',
    'data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:bg-gray-50',
    'dark:bg-gray-900 dark:text-gray-100',
    'dark:placeholder:text-gray-500',
    'dark:data-[disabled]:bg-gray-800',
  ],
  {
    variants: {
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-3 py-2 text-base',
        lg: 'px-4 py-2.5 text-lg',
      },
      hasError: {
        true: [
          'border-red-500',
          'focus-visible:border-red-500 focus-visible:ring-red-500',
        ],
        false: [
          'border-gray-300',
          'focus-visible:border-blue-500 focus-visible:ring-blue-500',
          'dark:border-gray-600',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
      hasError: false,
    },
  }
);

export interface InputProps
  extends Omit<BaseInputProps, 'size' | 'className'>,
    VariantProps<typeof inputVariants> {
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Icon to display before the input
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display after the input
   */
  rightIcon?: React.ReactNode;
  /**
   * Additional wrapper class name
   */
  wrapperClassName?: string;
}

/**
 * Input component built on Base UI primitives
 * Provides accessible input with icon support and error states
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size,
      hasError,
      leftIcon,
      rightIcon,
      className,
      wrapperClassName,
      ...props
    },
    ref
  ) => {
    const hasIcons = leftIcon || rightIcon;

    const input = (
      <BaseInput
        ref={ref}
        className={cn(
          inputVariants({ size, hasError }),
          leftIcon && 'pl-10',
          rightIcon && 'pr-10',
          className
        )}
        {...props}
      />
    );

    if (!hasIcons) {
      return input;
    }

    return (
      <div className={cn('relative', wrapperClassName)}>
        {leftIcon && (
          <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
            {leftIcon}
          </div>
        )}
        {input}
        {rightIcon && (
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
