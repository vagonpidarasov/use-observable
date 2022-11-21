import {concatWith, interval, map, timer} from 'rxjs';

const observable = timer(0).pipe(
  concatWith(interval(1000).pipe(map(v => v + 1)))
);

export default observable;
