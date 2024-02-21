import {Entity, model, property} from '@loopback/repository';

@model()
export class ProductCategory extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  productId?: number;

  @property({
    type: 'number',
  })
  categoryId?: number;

  constructor(data?: Partial<ProductCategory>) {
    super(data);
  }
}

export interface ProductCategoryRelations {
  // describe navigational properties here
}

export type ProductCategoryWithRelations = ProductCategory & ProductCategoryRelations;
