import * as BaseTabs from '@base-ui/react/tabs';
import { cn } from '../utils/cn';

export interface TabsProps {
  /**
   * Default selected tab value
   */
  defaultValue?: string;
  /**
   * Controlled selected tab value
   */
  value?: string;
  /**
   * Callback when tab changes
   */
  onValueChange?: (value: string) => void;
  /**
   * Tabs content
   */
  children: React.ReactNode;
  /**
   * Additional className
   */
  className?: string;
}

/**
 * Tabs component built on Base UI Tabs
 * Provides accessible tabbed interface with keyboard navigation
 */
export const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  value,
  onValueChange,
  children,
  className,
}) => {
  return (
    <BaseTabs.Tabs.Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      className={cn('w-full', className)}
    >
      {children}
    </BaseTabs.Tabs.Root>
  );
};

Tabs.displayName = 'Tabs';

export const TabsList: React.FC<React.ComponentPropsWithoutRef<typeof BaseTabs.Tabs.List>> = ({
  className,
  ...props
}) => (
  <BaseTabs.Tabs.List
    className={cn(
      'inline-flex h-10 items-center justify-center',
      'rounded-md bg-semantic-background-secondary p-1',
      'text-semantic-text-secondary',
      className
    )}
    {...props}
  />
);

TabsList.displayName = 'TabsList';

export const Tab: React.FC<React.ComponentPropsWithoutRef<typeof BaseTabs.Tabs.Tab>> = ({
  className,
  ...props
}) => (
  <BaseTabs.Tabs.Tab
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap',
      'rounded-sm px-3 py-1.5',
      'text-sm font-medium',
      'ring-offset-semantic-background-primary',
      'transition-all',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-border-focus focus-visible:ring-offset-2',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'data-[selected]:bg-semantic-background-primary data-[selected]:text-semantic-text-primary data-[selected]:shadow-sm',
      className
    )}
    {...props}
  />
);

Tab.displayName = 'Tab';

export const TabPanel: React.FC<React.ComponentPropsWithoutRef<typeof BaseTabs.Tabs.Panel>> = ({
  className,
  ...props
}) => (
  <BaseTabs.Tabs.Panel
    className={cn(
      'mt-2',
      'ring-offset-semantic-background-primary',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-border-focus focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
);

TabPanel.displayName = 'TabPanel';
