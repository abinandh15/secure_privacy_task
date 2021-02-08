import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Observable } from "rxjs";
import { CookieService } from "../services/cookie.service";

@Component({
  selector: "app-cookie-banner",
  templateUrl: "./cookie-banner.component.html",
  styleUrls: ["./cookie-banner.component.scss"],
})
export class CookieBannerComponent implements OnInit {
  @ViewChild("autoShownModal", { static: false })
  autoShownModal: ModalDirective;
  isModalShown = true;
  cookieData: Observable<any>;

  constructor(private cookieService: CookieService) {}
  ngOnInit(){
    this.cookieData = this.cookieService.getCookieBannerData()
    this.cookieService.getCookieBannerData().subscribe(val=>{
      console.log(val)
    })

  }
  showModal(): void {
    this.isModalShown = true;
  }

  hideModal(): void {
    this.autoShownModal.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
  }
}
