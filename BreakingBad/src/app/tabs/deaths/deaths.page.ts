import { Component, OnInit } from '@angular/core';
import {DeathsService} from "../../services/deaths.service";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {
  deathsData: any;
  randomDeathData: any;

  constructor(private service: DeathsService,  private loadingCtrl: LoadingController) { }

  ngOnInit() {
    return this.loadDeaths();
  }

  private async loadDeaths() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: "bubbles"
    });
    await loading.present();

    this.service.getDeaths().subscribe((result) => {
      this.loadingCtrl.dismiss();
      console.log(result);
      this.deathsData = result;
    });
  }

  async randomDeath() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: "bubbles"
    });
    await loading.present();

    this.service.getRandomDeath().subscribe((result) => {
      this.loadingCtrl.dismiss();
      console.log(result);
      this.randomDeathData = result;
    });
  }
}
