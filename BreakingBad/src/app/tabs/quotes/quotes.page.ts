import { Component, OnInit } from '@angular/core';
import {LoadingController} from "@ionic/angular";
import {QuotesService} from "../../services/quotes.service";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
  currentPage = 1;
  public quotesData: any;

  constructor(private service: QuotesService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    return this.loadQuotes();
  }

  private async loadQuotes() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: "bubbles"
    });
    await loading.present();

    this.service.getQuotes().subscribe((result) => {
      this.loadingCtrl.dismiss();
      console.log(result);
      this.quotesData = result;
    });
  }
}
