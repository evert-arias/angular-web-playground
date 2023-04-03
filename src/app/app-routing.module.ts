import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsViewComponent } from './views/product-details-view/product-details-view.component';
import { CounterViewComponent, PageNotFoundViewComponent } from './views';

const routes: Routes = [
  // { path: '', component: CounterComponent },
  { path: 'counter', component: CounterViewComponent },
  { path: 'products/:productId', component: ProductDetailsViewComponent },
  { path: '**', component: PageNotFoundViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
