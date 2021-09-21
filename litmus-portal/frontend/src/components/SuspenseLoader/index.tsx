import React, { Suspense } from 'react';
import Loader from '../Loader';

interface SuspenseLoaderProps {
  style?: Object;
}

export const SuspenseLoader: React.FC<SuspenseLoaderProps> = ({
  children,
  style,
}) => {
  return (
    <Suspense
      fallback={
        <div style={style ?? {}}>
          <Loader />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};
