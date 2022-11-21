import {concatWith, interval, map, Observable, switchMap, timer} from 'rxjs';

const endpoint = 'http://localhost:3001/rand';
const data = new Observable<{value: number}>(subscriber => {
  fetch(endpoint)
    .then(response => response.json())
    .then(response => subscriber.next(response))
    .then(() => subscriber.complete())
});
const observable:Observable<number> = timer(0).pipe(
  concatWith(interval(1000)),
  switchMap(() => data),
  map(data => data.value),
);

export default observable;
