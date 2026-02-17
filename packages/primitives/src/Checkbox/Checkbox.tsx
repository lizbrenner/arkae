import { forwardRef } from 'react';
import * as BaseCheckbox from '@base-ui/react/checkbox';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const checkboxVariants = cva(
  [
    'inline-flex h-5 w-5 items-center justify-center',
    'rounded border-2',
    'transition-all duration-base',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500',
    'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: [
          'border-primary-600',
          'data-[checked]:bg-primary-600 data-[checked]:border-primary-600',
          'hover:border-primary-700',
        ],
        secondary: [
          'border-secondary-600',
          'data-[checked]:bg-secondary-600 data-[checked]:border-secondary-600',
          'hover:border-secondary-700',
        ],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface CheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<typeof BaseCheckbox.Checkbox.Root>, 'className'>,
    VariantProps<typeof checkboxVariants> {
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Label for the checkbox
   */
  label?: string;
}

/**
 * Checkbox component built on Base UI primitives
 * Provides accessible checkbox with proper ARIA attributes
 */
export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ variant, className, label, ...props }, ref) => {
    return (
      <div className="inline-flex items-center gap-2">
        <BaseCheckbox.Checkbox.Root
          ref={ref}
          className={cn(checkboxVariants({ variant }), className)}
          {...props}
        >
          <BaseCheckbox.Checkbox.Indicator className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
          </BaseCheckbox.Checkbox.Indicator>
        </BaseCheckbox.Checkbox.Root>
        {label && (
          <label className="text-sm font-medium text-semantic-text-primary cursor-pointer select-none">
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
