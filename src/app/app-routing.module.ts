import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { data } from '../data';
import { SectionCategoryComponent } from './components/section-category/section-category.component';
import { SectionCheckoutComponent } from './components/section-checkout/section-checkout.component';
import { SectionHomeComponent } from './components/section-home/section-home.component';
import { SectionProductsComponent } from './components/section-products/section-products.component';

const categoryRoutes: Routes = data.categories.map(c => {
  return { path: `category/${c.category}`, component: SectionCategoryComponent}
});

const productsRoutes: Routes = data.products.map(p => {
  return { path: `products/${p.category}/${p.slug}`, component: SectionProductsComponent}
});

const routes: Routes = [
  { path: '', component: SectionHomeComponent },
  ...categoryRoutes, ...productsRoutes,
  { path: 'checkout', component: SectionCheckoutComponent },
  { path: '**', component: SectionHomeComponent }
];

console.log(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
