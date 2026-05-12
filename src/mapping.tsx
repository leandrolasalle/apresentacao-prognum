import React, { lazy } from 'react';

const Slide00 = lazy(() => import('./Slide00'));
const Slide01 = lazy(() => import('./Slide01'));
const Slide02 = lazy(() => import('./Slide02'));
const Slide03 = lazy(() => import('./Slide03'));
const Slide04 = lazy(() => import('./Slide04'));
const Slide05 = lazy(() => import('./Slide05'));
const Slide06 = lazy(() => import('./Slide06'));
const Slide07 = lazy(() => import('./Slide07'));
const Slide08 = lazy(() => import('./Slide08'));
const Slide09 = lazy(() => import('./Slide09'));
const Slide10 = lazy(() => import('./Slide10'));
const Slide11 = lazy(() => import('./Slide11'));
const Slide12 = lazy(() => import('./Slide12'));
const Slide13 = lazy(() => import('./Slide13'));
const Slide14 = lazy(() => import('./Slide14'));
const Slide15 = lazy(() => import('./Slide15'));

export const slideComponentMap: { [key: number]: React.ComponentType<{ setSlide?: (n: number) => void }> } = {
    0: Slide00,
    1: Slide01,
    2: Slide02,
    3: Slide03,
    4: Slide04,
    5: Slide05,
    6: Slide06,
    7: Slide07,
    8: Slide08,
    9: Slide09,
    10: Slide10,
    11: Slide11,
    12: Slide12,
    13: Slide13,
    14: Slide14,
    15: Slide15,
};