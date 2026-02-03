import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { colors } from './tokens/colors'
import { typography } from './tokens/typography'
import { spacing } from './tokens/spacing'

export const injectTokens = (theme = colors) => {
  const root = document.documentElement;

  // Colors
  root.style.setProperty('--color-bg-void', theme.background.void);
  root.style.setProperty('--color-bg-surface', theme.background.surface);
  root.style.setProperty('--color-bg-glass', theme.background.glass);

  root.style.setProperty('--color-text-primary', theme.text.primary);
  root.style.setProperty('--color-text-secondary', theme.text.secondary);
  root.style.setProperty('--color-text-tertiary', theme.text.tertiary);
  root.style.setProperty('--color-text-inverse', theme.text.inverse);

  root.style.setProperty('--color-accent-primary', theme.accent.primary);
  root.style.setProperty('--color-accent-secondary', theme.accent.secondary);
  root.style.setProperty('--color-border-subtle', theme.border.subtle);
  root.style.setProperty('--color-shadow', theme.shadow);

  // Gradient helper
  root.style.setProperty('--gradient-primary', `linear-gradient(135deg, ${theme.accent.primary}, ${theme.accent.secondary})`);
  root.style.setProperty('--gradient-glow', `radial-gradient(circle at center, ${theme.accent.primary}50, transparent 70%)`);

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
