
import React from 'react';
import { TheftDetection } from './TheftDetection';

export const TheftDetectionWrapper: React.FC = () => {
  // This component wraps the TheftDetection component
  // and provides custom styling via CSS classes instead of props
  // This approach fixes the TypeScript error with indicatorClassName
  return (
    <div className="theft-detection-wrapper">
      <TheftDetection />
      <style jsx>{`
        .theft-detection-wrapper :global(.progress-indicator) {
          background-color: #00CC66;
          transition: all 0.2s ease;
        }
      `}</style>
    </div>
  );
};
