import { Action, createReducer, on } from '@ngrx/store';
import * as CustomerAction from '../action/customer.actions';
import {Customer} from '../../../models/customer';
//import { state } from '@angular/animations';

export const customerFeatureKey = 'customer';

export interface CustomerState  {
customers:Customer[];
}

export const initialState: CustomerState  = {
customers:[]
};


export const customerReducer  = createReducer(
  initialState,
  on(CustomerAction.cCustomers,
    (state:CustomerState,{Customer})=>({...state,customers: [...state.customers ,Customer] }))

);

export function reducer(state: CustomerState | undefined, action: Action): any {

    return customerReducer(state, action);

  }

