import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgBack = props => (
  <Svg height={24} width={24} viewBox="0 0 512 512" {...props}>
    <Path
      fill="#FCA82F"
      d="M49.932 256L211.795 94.136c8.077-8.077 8.077-21.172 0-29.249-8.077-8.076-21.172-8.076-29.249 0L6.058 241.375c-8.077 8.077-8.077 21.172 0 29.249l176.488 176.488a20.616 20.616 0 0 0 14.625 6.058 20.616 20.616 0 0 0 14.625-6.058c8.077-8.077 8.077-21.172 0-29.249L49.932 256z"
    />
  </Svg>
);

export default SvgBack;
