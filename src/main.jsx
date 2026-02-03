import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { colors } from './tokens/colors'
import { typography } from './tokens/typography'
import { spacing } from './tokens/spacing'

const injectTokens = () => {
  const root = document.documentElement;

  // Colors - Updated for V2
  root.style.setProperty('--color-bg-void', colors.background.void);
  root.style.setProperty('--color-bg-surface', colors.background.surface);
  root.style.setProperty('--color-bg-glass', colors.background.glass);

  root.style.setProperty('--color-text-primary', colors.text.primary);
  root.style.setProperty('--color-text-secondary', colors.text.secondary);
  root.style.setProperty('--color-text-tertiary', colors.text.tertiary);
  root.style.setProperty('--color-text-inverse', colors.text.inverse);

  root.style.setProperty('--color-accent-primary', colors.accent.primary);
  root.style.setProperty('--color-accent-secondary', colors.accent.secondary);
  root.style.setProperty('--color-border-subtle', colors.border.subtle);

  // Gradient helper
  root.style.setProperty('--gradient-primary', `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.secondary})`);
  root.style.setProperty('--gradient-glow', `radial-gradient(circle at center, ${colors.accent.primary}50, transparent 70%)`);

  // Typography
  root.style.setProperty('--font-family-sans', typography.fontFamily.sans);
  root.style.setProperty('--font-family-mono', typography.fontFamily.mono);

  Object.entries(typography.fontSize).forEach(([key, value]) => {
    root.style.setProperty(`--font-size-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
  });

  Object.entries(typography.fontWeight).forEach(([key, value]) => {
    root.style.setProperty(`--font-weight-${key}`, value);
  });

  Object.entries(typography.lineHeight).forEach(([key, value]) => {
    root.style.setProperty(`--line-height-${key}`, value);
  });

  Object.entries(typography.letterSpacing).forEach(([key, value]) => {
    root.style.setProperty(`--letter-spacing-${key}`, value);
  });

  // Spacing
  Object.entries(spacing).forEach(([key, value]) => {
    root.style.setProperty(`--spacing-${key}`, value);
  });
};

injectTokens();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
