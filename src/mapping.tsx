import React from 'react';
import Slide00 from './Slide00';
import Slide01 from './Slide01';
import Slide02 from './Slide02';
import Slide03 from './Slide03';
import Slide04 from './Slide04';
import Slide05 from './Slide05';
import Slide06 from './Slide06';
import Slide07 from './Slide07';
import Slide08 from './Slide08';
import Slide09 from './Slide09';
import Slide10 from './Slide10';
import Slide11 from './Slide11';
import Slide12 from './Slide12';
import Slide13 from './Slide13';
import Slide14 from './Slide14';
import Slide15 from './Slide15';

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