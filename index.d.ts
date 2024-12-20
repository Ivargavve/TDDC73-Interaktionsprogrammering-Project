import * as React from 'react';

declare module 'mini-sdk-ui' {
    export const PasswordStrengthMeter: React.ComponentType;
    export const Carousel: React.ComponentType<{ images: string[] }>;
  }
  