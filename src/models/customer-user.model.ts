import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Customer} from './customer.model';

@model()
export class CustomerUser extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @belongsTo(() => Customer)
  customerId: number;

  constructor(data?: Partial<CustomerUser>) {
    super(data);
  }
}

export interface CustomerUserRelations {
  // describe navigational properties here
}

export type CustomerUserWithRelations = CustomerUser & CustomerUserRelations;
