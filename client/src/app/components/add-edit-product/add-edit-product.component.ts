import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from './../../services/products.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

import { IProduct } from './../../models/IProduct';
import { ICookie } from './../../models/ICookie';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  private name: FormControl;
  private size: FormControl;
  private color: FormControl;
  private os: FormControl;
  private processor: FormControl;
  private storage: FormControl;
  private memory: FormControl;
  private camera: FormControl;
  private model: FormControl;
  private battery: FormControl;
  private price: FormControl;
  private resolution: FormControl;
  private description: FormControl;
  private imageUrl: FormControl;

  public addProductForm: FormGroup;


  constructor(
    private router: Router,
    private productsService: ProductsService,
    private vcRef: ViewContainerRef,
    public toastr: ToastsManager) {
    this.toastr.setRootViewContainerRef(vcRef);
  }

  ngOnInit() {
    this.buildAddProductFormData();
  }

  buildAddProductFormData() {
    this.name  = new FormControl('', [
      Validators.required
    ]);

    this.size  = new FormControl('', [
      Validators.required
    ]);

    this.color  = new FormControl('', [
      Validators.required
    ]);

    this.os  = new FormControl('', [
      Validators.required
    ]);

    this.processor  = new FormControl('', [
      Validators.required
    ]);

    this.storage  = new FormControl('', [
      Validators.required
    ]);

    this.memory  = new FormControl('', [
      Validators.required
    ]);

    this.camera  = new FormControl('', [
      Validators.required
    ]);

    this.model  = new FormControl('', [
      Validators.required
    ]);

    this.battery  = new FormControl('', [
      Validators.required
    ]);

    this.price  = new FormControl('', [
      Validators.required
    ]);

    this.resolution  = new FormControl('', [
      Validators.required
    ]);

    this.description  = new FormControl('', [
      Validators.required
    ]);

    this.imageUrl  = new FormControl('', [
      Validators.required,
      Validators.pattern('https?://.+')
    ]);

    this.addProductForm = new FormGroup({
      name: this.name,
      size: this.size,
      color: this.color,
      os: this.os,
      processor: this.processor,
      storage: this.storage,
      memory: this.memory,
      camera: this.camera,
      model: this.model,
      battery: this.battery,
      price: this.price,
      resolution: this.resolution,
      description: this.description,
      imageUrl: this.imageUrl
    });
  }

  addProduct(productData: IProduct) {
    const handleSuccessResponse = (cookie: ICookie) => {
      this.router.navigate(['products'], { queryParams: { 'refresh': 1 } });
    };

    this.productsService.add(productData);
    this.toastr.success('Product added successfully')

  }
}
