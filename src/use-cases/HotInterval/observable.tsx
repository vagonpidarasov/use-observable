import {interval, shareReplay} from 'rxjs';
const observable = interval(1000).pipe(shareReplay(1));
export default observable;
