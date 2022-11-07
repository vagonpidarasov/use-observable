import {Observable} from 'rxjs';

export type PropsType = {
  onSelect: (observable: Observable<number>) => void,
};
