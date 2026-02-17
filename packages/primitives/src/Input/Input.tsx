import { forwardRef } from 'react';
import { Input as BaseInput } from '@base-ui/react/input';
import type { InputProps as BaseInputProps } from '@base-ui/react/input';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const inputVariants = cva(
  [
    'w-full rounded-lg border',
    'bg-semantic-background-primary text-semantic-text-primary',
    'placeholder:text-semantic-text-tertiary',
    'transition-colors duration-base',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1',
    'data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:bg-semantic-background-secondary',
  ],
  {
    variants: {
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-4 py-3 text-lg',
      },
      hasError: {
        true: [
          'border-error-500',
          'focus-visible:border-error-500 focus-visible:ring-error-500',
        ],
        false: [
          'border-semantic-border-primary',
          'focus-visible:border-semantic-border-focus focus-visible:ring-semantic-border-focus',
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
          <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-semantic-text-tertiary">
            {leftIcon}
          </div>
        )}
        {input}
        {rightIcon && (
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-semantic-text-tertiary">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
