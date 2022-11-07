import {Observable, tap, share} from 'rxjs';
import {useEffect} from 'react';

export function useTap<T = unknown>(
  observable: Observable<T>,
  callback: (next:T) => void,
): void {

  useEffect(() => {
    const subscription = observable.pipe(
      share(),
      tap(),
    ).subscribe(callback);

    return () => subscription.unsubscribe();
  }, [observable]);
}
