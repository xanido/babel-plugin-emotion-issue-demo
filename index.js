import React from 'react';
import { css } from '@emotion/core';

const ComponentWithArrayCss = () => (
  <section
    css={[
      css`font-weight: bold;`,
      css`font-style: italic;`,
    ]}
  >
    Hello world
  </section>
);

ComponentWithArrayCss();