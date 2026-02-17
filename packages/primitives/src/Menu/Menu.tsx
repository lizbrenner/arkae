import * as BaseMenu from '@base-ui/react/menu';
import { cn } from '../utils/cn';

export interface MenuProps {
  /**
   * Trigger element for the menu
   */
  trigger: React.ReactNode;
  /**
   * Menu content
   */
  children: React.ReactNode;
  /**
   * Additional className for menu content
   */
  className?: string;
}

/**
 * Menu (Dropdown) component built on Base UI Menu
 * Provides accessible dropdown menu with keyboard navigation
 */
export const Menu: React.FC<MenuProps> = ({ trigger, children, className }) => {
  return (
    <BaseMenu.Menu.Root>
      <BaseMenu.Menu.Trigger className={cn('inline-flex items-center justify-center', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-border-focus')}>
        {trigger}
      </BaseMenu.Menu.Trigger>
      <BaseMenu.Menu.Portal>
        <BaseMenu.Menu.Positioner>
          <BaseMenu.Menu.Popup
            className={cn(
              'min-w-[8rem] overflow-hidden rounded-md',
              'bg-semantic-background-primary',
              'border border-semantic-border-primary',
              'shadow-lg',
              'p-1',
              'data-[state=open]:animate-in data-[state=closed]:animate-out',
              'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
              'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
              className
            )}
          >
            {children}
          </BaseMenu.Menu.Popup>
        </BaseMenu.Menu.Positioner>
      </BaseMenu.Menu.Portal>
    </BaseMenu.Menu.Root>
  );
};

Menu.displayName = 'Menu';

export const MenuItem: React.FC<React.ComponentPropsWithoutRef<typeof BaseMenu.Menu.Item>> = ({
  className,
  ...props
}) => (
  <BaseMenu.Menu.Item
    className={cn(
      'relative flex cursor-pointer select-none items-center',
      'rounded-sm px-2 py-1.5 text-sm',
      'text-semantic-text-primary',
      'outline-none transition-colors',
      'focus:bg-semantic-background-secondary',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  />
);

MenuItem.displayName = 'MenuItem';

export const MenuSeparator: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div className={cn('-mx-1 my-1 h-px bg-semantic-border-primary', className)} {...props} />
);

MenuSeparator.displayName = 'MenuSeparator';
