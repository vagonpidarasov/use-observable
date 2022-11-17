import {Observable} from 'rxjs';
import {FC, ReactElement} from 'react';

export type PayloadType = {
  observable: Observable<number>,
  description: ReactElement,
  selectedItem: string,
}
export type PropsType = {
  selected: boolean,
  onSelect: (payload:PayloadType) => void,
};
