import type { Meta, StoryObj } from '@storybook/react';
import { typography, fontSizes, fontWeights, lineHeights } from '@arkae/tokens';

const meta = {
  title: 'Tokens/Typography',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeScale: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
        Type Scale
      </h2>
      {Object.entries(fontSizes).map(([key, value]) => (
        <div
          key={key}
          style={{
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'baseline',
            gap: '1rem',
          }}
        >
          <code
            style={{
              fontSize: '0.875rem',
              color: '#666',
              minWidth: '80px',
              fontFamily: 'monospace',
            }}
          >
            {key}
          </code>
          <span style={{ fontSize: value, fontWeight: 400 }}>
            The quick brown fox jumps over the lazy dog
          </span>
          <code style={{ fontSize: '0.75rem', color: '#999', fontFamily: 'monospace' }}>
            {value}
          </code>
        </div>
      ))}
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
        Font Weights
      </h2>
      {Object.entries(fontWeights).map(([key, value]) => (
        <div
          key={key}
          style={{
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'baseline',
            gap: '1rem',
          }}
        >
          <code
            style={{
              fontSize: '0.875rem',
              color: '#666',
              minWidth: '100px',
              fontFamily: 'monospace',
            }}
          >
            {key}
          </code>
          <span style={{ fontSize: '1.125rem', fontWeight: value }}>
            The quick brown fox jumps over the lazy dog
          </span>
          <code style={{ fontSize: '0.75rem', color: '#999', fontFamily: 'monospace' }}>
            {value}
          </code>
        </div>
      ))}
    </div>
  ),
};

export const LineHeights: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
        Line Heights
      </h2>
      {Object.entries(lineHeights).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '2rem' }}>
          <code
            style={{
              fontSize: '0.875rem',
              color: '#666',
              fontFamily: 'monospace',
              marginBottom: '0.5rem',
              display: 'block',
            }}
          >
            {key}: {value}
          </code>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: value,
              maxWidth: '600px',
              backgroundColor: '#f5f5f5',
              padding: '1rem',
              borderRadius: '8px',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </p>
        </div>
      ))}
    </div>
  ),
};

export const TypographyVariants: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
        Typography Variants
      </h2>
      {Object.entries(typography).map(([key, styles]) => (
        <div key={key} style={{ marginBottom: '2rem' }}>
          <code
            style={{
              fontSize: '0.875rem',
              color: '#666',
              fontFamily: 'monospace',
              marginBottom: '0.5rem',
              display: 'block',
            }}
          >
            {key}
          </code>
          <div style={styles as React.CSSProperties}>
            The quick brown fox jumps over the lazy dog
          </div>
          <pre
            style={{
              fontSize: '0.75rem',
              color: '#999',
              fontFamily: 'monospace',
              marginTop: '0.5rem',
              backgroundColor: '#f5f5f5',
              padding: '0.5rem',
              borderRadius: '4px',
              overflow: 'auto',
            }}
          >
            {JSON.stringify(styles, null, 2)}
          </pre>
        </div>
      ))}
    </div>
  ),
};

export const Headings: Story = {
  render: () => (
    <div>
      <h1 style={typography.h1 as React.CSSProperties}>Heading 1</h1>
      <h2 style={typography.h2 as React.CSSProperties}>Heading 2</h2>
      <h3 style={typography.h3 as React.CSSProperties}>Heading 3</h3>
      <h4 style={typography.h4 as React.CSSProperties}>Heading 4</h4>
      <h5 style={typography.h5 as React.CSSProperties}>Heading 5</h5>
      <h6 style={typography.h6 as React.CSSProperties}>Heading 6</h6>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div>
      <p style={{ ...typography.bodyLarge, marginBottom: '1rem' } as React.CSSProperties}>
        <strong>Body Large:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p style={{ ...typography.body, marginBottom: '1rem' } as React.CSSProperties}>
        <strong>Body:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p style={{ ...typography.bodySmall, marginBottom: '1rem' } as React.CSSProperties}>
        <strong>Body Small:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p style={typography.caption as React.CSSProperties}>
        <strong>Caption:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  ),
};
