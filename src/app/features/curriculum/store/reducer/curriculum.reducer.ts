import { Curriculum } from './../../model/curriculum';
import { Action, createReducer, on } from '@ngrx/store';


export const curriculumFeatureKey = 'curriculum';

export interface State {

  Curriculum: Curriculum;

}


export const initialState: State = {

  Curriculum: {}

};


export const reducer = createReducer(
  initialState,

);

