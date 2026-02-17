import type { Meta, StoryObj } from '@storybook/react';
import { colors, semanticColorsLight, semanticColorsDark, tokens } from '@arkae/tokens';

const meta = {
  title: 'Tokens/Colors',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ color, name }: { color: string; name: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '120px' }}>
    <div
      style={{
        width: '100%',
        height: '80px',
        backgroundColor: color,
        borderRadius: '8px',
        border: '1px solid rgba(0,0,0,0.1)',
      }}
    />
    <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>{name}</div>
    <div style={{ fontSize: '0.75rem', color: '#666', fontFamily: 'monospace' }}>{color}</div>
  </div>
);

const ColorScale = ({ scale, name }: { scale: Record<string, string>; name: string }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>{name}</h3>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {Object.entries(scale).map(([key, value]) => (
        <ColorSwatch key={key} color={value} name={key} />
      ))}
    </div>
  </div>
);

export const PrimaryColors: Story = {
  render: () => <ColorScale scale={colors.primary} name="Primary (Indigo)" />,
};

export const SecondaryColors: Story = {
  render: () => <ColorScale scale={colors.secondary} name="Secondary (Purple)" />,
};

export const GrayScale: Story = {
  render: () => <ColorScale scale={colors.gray} name="Gray Scale" />,
};

export const SuccessColors: Story = {
  render: () => <ColorScale scale={colors.success} name="Success (Green)" />,
};

export const ErrorColors: Story = {
  render: () => <ColorScale scale={colors.error} name="Error (Red)" />,
};

export const WarningColors: Story = {
  render: () => <ColorScale scale={colors.warning} name="Warning (Amber)" />,
};

export const InfoColors: Story = {
  render: () => <ColorScale scale={colors.info} name="Info (Blue)" />,
};

export const SemanticColorsLight: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
        Semantic Colors (Light Mode)
      </h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {Object.entries(semanticColorsLight).map(([key, value]) => (
          <ColorSwatch key={key} color={value} name={key} />
        ))}
      </div>
    </div>
  ),
};

export const SemanticColorsDark: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <div>
      <h2
        style={{
          marginBottom: '1.5rem',
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'white',
        }}
      >
        Semantic Colors (Dark Mode)
      </h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {Object.entries(semanticColorsDark).map(([key, value]) => (
          <ColorSwatch key={key} color={value} name={key} />
        ))}
      </div>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div>
      <ColorScale scale={colors.primary} name="Primary (Indigo)" />
      <ColorScale scale={colors.secondary} name="Secondary (Purple)" />
      <ColorScale scale={colors.gray} name="Gray Scale" />
      <ColorScale scale={colors.success} name="Success (Green)" />
      <ColorScale scale={colors.error} name="Error (Red)" />
      <ColorScale scale={colors.warning} name="Warning (Amber)" />
      <ColorScale scale={colors.info} name="Info (Blue)" />
    </div>
  ),
};
