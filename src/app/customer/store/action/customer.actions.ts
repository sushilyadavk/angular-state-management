import { createAction, props } from '@ngrx/store';
import{Customer} from '../../../models/customer'

export const cCustomers = createAction(
  '[Customer] C Customers',
  (Customer:Customer)=>({Customer})

);




