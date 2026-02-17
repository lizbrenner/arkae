import type { Meta, StoryObj } from '@storybook/react';
import { spacing, sizes, shadows, borderRadius } from '@arkae/tokens';

const meta = {
  title: 'Tokens/Spacing & Layout',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spacing: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
        Spacing Scale
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Object.entries(spacing).map(([key, value]) => (
          <div
            key={key}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <code
              style={{
                fontSize: '0.875rem',
                color: '#666',
                minWidth: '60px',
                fontFamily: 'monospace',
              }}
            >
              {key}
            </code>
            <div
              style={{
                width: value,
                height: '32px',
                backgroundColor: '#4f46e5',
                borderRadius: '4px',
              }}
            />
            <code style={{ fontSize: '0.75rem', color: '#999', fontFamily: 'monospace' }}>
              {value}
            </code>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
        Size Scale
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Object.entries(sizes).map(([key, value]) => (
          <div
            key={key}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <code
              style={{
                fontSize: '0.875rem',
                color: '#666',
                minWidth: '60px',
                fontFamily: 'monospace',
              }}
            >
              {key}
            </code>
            <div
              style={{
                width: value,
                height: value,
                backgroundColor: '#9333ea',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '0.75rem',
              }}
            />
            <code style={{ fontSize: '0.75rem', color: '#999', fontFamily: 'monospace' }}>
              {value}
            </code>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Shadows: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
        Shadow Scale
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        {Object.entries(shadows).map(([key, value]) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '100%',
                height: '120px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: value,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}
            >
              <code style={{ fontSize: '0.875rem', fontWeight: 600 }}>{key}</code>
            </div>
            <code
              style={{
                fontSize: '0.75rem',
                color: '#666',
                fontFamily: 'monospace',
                wordBreak: 'break-all',
              }}
            >
              {value}
            </code>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
        Border Radius
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem' }}>
        {Object.entries(borderRadius).map(([key, value]) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: '#10b981',
                borderRadius: value,
                margin: '0 auto 1rem',
              }}
            />
            <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem' }}>
              {key}
            </div>
            <code style={{ fontSize: '0.75rem', color: '#666', fontFamily: 'monospace' }}>
              {value}
            </code>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const SpacingExamples: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
        Spacing in Use
      </h2>
      
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
          Stack (Vertical Spacing)
        </h3>
        <div style={{ backgroundColor: '#f5f5f5', padding: spacing[4], borderRadius: '8px' }}>
          <div style={{ backgroundColor: 'white', padding: spacing[4], borderRadius: '4px', marginBottom: spacing[2] }}>
            Item with spacing.2 margin
          </div>
          <div style={{ backgroundColor: 'white', padding: spacing[4], borderRadius: '4px', marginBottom: spacing[4] }}>
            Item with spacing.4 margin
          </div>
          <div style={{ backgroundColor: 'white', padding: spacing[4], borderRadius: '4px' }}>
            Last item (no margin)
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
          Inline (Horizontal Spacing)
        </h3>
        <div style={{ backgroundColor: '#f5f5f5', padding: spacing[4], borderRadius: '8px', display: 'flex', gap: spacing[4] }}>
          <div style={{ backgroundColor: 'white', padding: spacing[4], borderRadius: '4px' }}>
            Item 1
          </div>
          <div style={{ backgroundColor: 'white', padding: spacing[4], borderRadius: '4px' }}>
            Item 2
          </div>
          <div style={{ backgroundColor: 'white', padding: spacing[4], borderRadius: '4px' }}>
            Item 3
          </div>
        </div>
      </div>
    </div>
  ),
};
