import React, {useCallback} from 'react';
import {
  retry,
  timeout,
  map,
  Observable,
} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {PropsType} from './props-type';

const endpoint = 'http://localhost:3001/rand?delay=random';
const data:Observable<number> = ajax.getJSON<{value: number}>(endpoint).pipe(
  timeout(500),
  retry(2),
  map(data => data.value),
)

export function TimeoutRetry({onSelect}: PropsType) {
  const handleSelect = useCallback(() => onSelect(data), []);

  return (
    <div className="grid-row">
      <button className="pick" onClick={handleSelect}>Timout retry</button>
    </div>
  );
}

