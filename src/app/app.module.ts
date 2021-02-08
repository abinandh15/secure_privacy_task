import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CookieBannerComponent } from "./cookie-banner/cookie-banner.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ModalModule } from "ngx-bootstrap/modal";
import { HttpClientModule } from "@angular/common/http";
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [AppComponent, CookieBannerComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
  ],
  providers: [],
  entryComponents: [CookieBannerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
