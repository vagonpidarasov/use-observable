import {Observable} from 'rxjs';
import {useEffect, useState} from 'react';

export function useObservable<T = unknown>(observable: Observable<T>): T | undefined {
  const [value, setValue] = useState<T|undefined>(undefined);

  useEffect(() => {
    const subscription = observable.subscribe((next) => {
      setValue(next);
    });

    return () => subscription.unsubscribe();
  }, [observable]);

  return value;
}
