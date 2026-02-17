import * as BaseTooltip from '@base-ui/react/tooltip';
import { cn } from '../utils/cn';

export interface TooltipProps {
  /**
   * Element that triggers the tooltip
   */
  children: React.ReactNode;
  /**
   * Tooltip content
   */
  content: React.ReactNode;
  /**
   * Delay before showing tooltip (ms)
   */
  delay?: number;
  /**
   * Additional className for tooltip content
   */
  className?: string;
}

/**
 * Tooltip component built on Base UI Tooltip
 * Provides accessible tooltip with proper ARIA attributes
 */
export const Tooltip: React.FC<TooltipProps> = ({ children, content, delay = 400, className }) => {
  return (
    <BaseTooltip.Tooltip.Provider delay={delay}>
      <BaseTooltip.Tooltip.Root>
        <BaseTooltip.Tooltip.Trigger>{children}</BaseTooltip.Tooltip.Trigger>
        <BaseTooltip.Tooltip.Portal>
          <BaseTooltip.Tooltip.Positioner>
            <BaseTooltip.Tooltip.Popup
              className={cn(
                'z-tooltip',
                'rounded-md bg-gray-900 px-3 py-1.5',
                'text-xs text-white',
                'shadow-md',
                'data-[state=open]:animate-in data-[state=closed]:animate-out',
                'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
                className
              )}
            >
              {content}
              <BaseTooltip.Tooltip.Arrow className="fill-gray-900" />
            </BaseTooltip.Tooltip.Popup>
          </BaseTooltip.Tooltip.Positioner>
        </BaseTooltip.Tooltip.Portal>
      </BaseTooltip.Tooltip.Root>
    </BaseTooltip.Tooltip.Provider>
  );
};

Tooltip.displayName = 'Tooltip';
