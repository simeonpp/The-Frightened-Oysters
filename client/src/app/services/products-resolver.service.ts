import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductsService } from './products.service';

@Injectable()
export class ProductsResolverService implements Resolve<any> {

  constructor(private productsService: ProductsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.productsService.getAll();
  }

}
