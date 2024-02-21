import {Entity, model, property} from '@loopback/repository';

@model()
export class ProductsInvoice extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @property({
    type: 'number',
    required: true,
  })
  unit_price: number;

  @property({
    type: 'number',
  })
  invoiceId?: number;

  @property({
    type: 'number',
  })
  productId?: number;

  constructor(data?: Partial<ProductsInvoice>) {
    super(data);
  }
}

export interface ProductsInvoiceRelations {
  // describe navigational properties here
}

export type ProductsInvoiceWithRelations = ProductsInvoice & ProductsInvoiceRelations;
