import { forwardRef } from 'react';
import * as BaseSwitch from '@base-ui/react/switch';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const switchVariants = cva(
  [
    'relative inline-flex h-6 w-11 items-center rounded-full',
    'transition-colors duration-base',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500',
    'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: 'data-[checked]:bg-primary-600 data-[unchecked]:bg-gray-200',
        secondary: 'data-[checked]:bg-secondary-600 data-[unchecked]:bg-gray-200',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface SwitchProps
  extends Omit<React.ComponentPropsWithoutRef<typeof BaseSwitch.Switch.Root>, 'className'>,
    VariantProps<typeof switchVariants> {
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Label for the switch
   */
  label?: string;
}

/**
 * Switch component built on Base UI primitives
 * Provides accessible toggle switch
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ variant, className, label, ...props }, ref) => {
    return (
      <div className="inline-flex items-center gap-2">
        <BaseSwitch.Switch.Root
          ref={ref}
          className={cn(switchVariants({ variant }), className)}
          {...props}
        >
          <BaseSwitch.Switch.Thumb className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-base data-[checked]:translate-x-6 data-[unchecked]:translate-x-1" />
        </BaseSwitch.Switch.Root>
        {label && (
          <label className="text-sm font-medium text-semantic-text-primary cursor-pointer select-none">
            {label}
          </label>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
