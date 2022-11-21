import React from 'react';

export default <>
    <span>Discards requests if they fail to return data
      within desired timeframe, retries 3 times. See</span>&nbsp;
  <a
    href="https://rxjs.dev/api/operators/timeout"
    target="_blank"
    rel="noopener noreferrer"
  >timeout</a> and <a
  href="https://rxjs.dev/api/operators/retry"
  target="_blank"
  rel="noopener noreferrer"
>retry</a>
</>;
