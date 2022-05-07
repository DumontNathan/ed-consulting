import React, { lazy, Suspense } from 'react';

const LazyFormations = lazy(() => import('./Formations'));

const Formations = props => (
  <Suspense fallback={null}>
    <LazyFormations {...props} />
  </Suspense>
);

export default Formations;
