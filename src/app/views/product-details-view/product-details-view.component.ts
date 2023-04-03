import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.css'],
})
export class ProductDetailsViewComponent implements OnInit {
  productId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.productId = routeParams.get('productId');
    console.log(routeParams);
  }
}
