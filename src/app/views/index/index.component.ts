import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openEmail(){
    window.location.href = "mailto:general@royalgreentrading.com?subject=Enquiry&body=Your message";
  }
}
