import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  photoId = 0;
  productId = 0;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      const innerValueParams = params
      this.photoId = innerValueParams['photoId1'];
      this.productId = innerValueParams['productId'];

      console.log(params);
    });
}

}
