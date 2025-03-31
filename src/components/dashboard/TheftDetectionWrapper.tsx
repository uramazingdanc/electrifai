
import React from 'react';
import { TheftDetection } from './TheftDetection';

export const TheftDetectionWrapper: React.FC = () => {
  // This component wraps the TheftDetection component
  // and provides custom styling via a regular div
  return (
    <div className="theft-detection-wrapper">
      <TheftDetection />
    </div>
  );
};
