import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ProductsInvoice, ProductsInvoiceRelations} from '../models';

export class ProductsInvoiceRepository extends DefaultCrudRepository<
  ProductsInvoice,
  typeof ProductsInvoice.prototype.id,
  ProductsInvoiceRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(ProductsInvoice, dataSource);
  }
}
