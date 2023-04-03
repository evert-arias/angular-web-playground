import { NgModule } from '@angular/core';
import { CounterComponent } from '../components';
import { CounterViewComponent } from './counter-view/counter-view.component';
import { PageNotFoundViewComponent } from './page-not-found-view/page-not-found-view.component';
import { ProductDetailsViewComponent } from './product-details-view/product-details-view.component';

@NgModule({
  declarations: [
    CounterViewComponent,
    PageNotFoundViewComponent,
    ProductDetailsViewComponent,
    CounterComponent,
  ],
  imports: [],
  providers: [],
  bootstrap: [],
})
export class ViewsModule {}
