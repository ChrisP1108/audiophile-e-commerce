import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ShoppingItemListComponent } from './components/shopping-item-list/shopping-item-list.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { BottomHeadlineComponent } from './components/bottom-headline/bottom-headline.component';
import { CategoryHeadingComponent } from './components/category-heading/category-heading.component';
import { ProductPromoComponent } from './components/product-promo/product-promo.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { TriGalleryComponent } from './components/tri-gallery/tri-gallery.component';
import { OtherProductListComponent } from './components/other-product-list/other-product-list.component';
import { OtherProductItemComponent } from './components/other-product-item/other-product-item.component';
import { CartModalListComponent } from './components/cart-modal-list/cart-modal-list.component';
import { CartModalItemComponent } from './components/cart-modal-item/cart-modal-item.component';
import { CheckoutInfoComponent } from './components/checkout-info/checkout-info.component';
import { CheckoutModalComponent } from './components/checkout-modal/checkout-modal.component';
import { ToggleMenuComponent } from './components/toggle-menu/toggle-menu.component';
import { SectionHomeComponent } from './components/section-home/section-home.component';
import { SectionCategoryComponent } from './components/section-category/section-category.component';
import { SectionProductsComponent } from './components/section-products/section-products.component';
import { SectionCheckoutComponent } from './components/section-checkout/section-checkout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavLinksComponent } from './components/nav-links/nav-links.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewProductComponent,
    ShoppingItemListComponent,
    ShoppingItemComponent,
    PromotionsComponent,
    BottomHeadlineComponent,
    CategoryHeadingComponent,
    ProductPromoComponent,
    ProductDetailsComponent,
    FooterComponent,
    TriGalleryComponent,
    OtherProductListComponent,
    OtherProductItemComponent,
    CartModalListComponent,
    CartModalItemComponent,
    CheckoutInfoComponent,
    CheckoutModalComponent,
    ToggleMenuComponent,
    SectionHomeComponent,
    SectionCategoryComponent,
    SectionProductsComponent,
    SectionCheckoutComponent,
    PageNotFoundComponent,
    NavLinksComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
