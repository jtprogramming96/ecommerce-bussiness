import {Entity, belongsTo, hasMany, model, property} from '@loopback/repository';
import {Brand} from './brand.model';
import {Category} from './category.model';
import {Image} from './image.model';
import {ProductCategory} from './product-category.model';

@model()
export class Product extends Entity {
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
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    required: true,
  })
  stock: number;

  @property({
    type: 'number',
    default: 0,
  })
  stars?: number;

  @property({
    type: 'number',
    default: 0,
  })
  discount?: number;

  @property({
    type: 'string',
    required: true,
  })
  main_image: string;

  @hasMany(() => Category, {through: {model: () => ProductCategory}})
  categories: Category[]; // a través de este atributo, se relaciona con Category

  @hasMany(() => Image)
  images: Image[];    // a través de este atributo, se relaciona con Image

  @belongsTo(() => Brand)
  brandId: number;  // pertenece a quiere decir "necesariamente pertenece a"

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
