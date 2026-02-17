import * as BaseDialog from '@base-ui/react/dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const dialogContentVariants = cva(
  [
    'fixed left-[50%] top-[50%] z-modal',
    'translate-x-[-50%] translate-y-[-50%]',
    'w-full',
    'bg-semantic-background-primary',
    'rounded-lg shadow-xl',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    'max-h-[90vh] overflow-y-auto',
  ],
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        full: 'max-w-full mx-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface DialogProps extends VariantProps<typeof dialogContentVariants> {
  /**
   * Whether the dialog is open
   */
  open: boolean;
  /**
   * Callback when the dialog open state changes
   */
  onOpenChange: (open: boolean) => void;
  /**
   * Dialog content
   */
  children: React.ReactNode;
  /**
   * Additional className for dialog content
   */
  className?: string;
}

/**
 * Dialog (Modal) component built on Base UI Dialog
 * Handles accessibility, focus trapping, and escape key automatically
 */
export const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, size, children, className }) => {
  return (
    <BaseDialog.Dialog.Root open={open} onOpenChange={onOpenChange}>
      <BaseDialog.Dialog.Portal>
        <BaseDialog.Dialog.Backdrop className="fixed inset-0 z-modal bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <BaseDialog.Dialog.Popup
          className={cn(dialogContentVariants({ size }), className)}
        >
          {children}
        </BaseDialog.Dialog.Popup>
      </BaseDialog.Dialog.Portal>
    </BaseDialog.Dialog.Root>
  );
};

Dialog.displayName = 'Dialog';

export const DialogTitle: React.FC<React.ComponentPropsWithoutRef<typeof BaseDialog.Dialog.Title>> = ({
  className,
  ...props
}) => (
  <BaseDialog.Dialog.Title
    className={cn('text-lg font-semibold text-semantic-text-primary', className)}
    {...props}
  />
);

DialogTitle.displayName = 'DialogTitle';

export const DialogDescription: React.FC<
  React.ComponentPropsWithoutRef<typeof BaseDialog.Dialog.Description>
> = ({ className, ...props }) => (
  <BaseDialog.Dialog.Description
    className={cn('text-sm text-semantic-text-secondary', className)}
    {...props}
  />
);

DialogDescription.displayName = 'DialogDescription';
