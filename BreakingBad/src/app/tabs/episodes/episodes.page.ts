import { Component, OnInit } from '@angular/core';
import {EpisodesService} from "../../services/episodes.service";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
  currentPage = 1;
  public episodesData: any;

  constructor(private service: EpisodesService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    return this.loadEpisodes();
  }

  async loadEpisodes() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: "bubbles"
    });
    await loading.present();

    this.service.getEpisodes().subscribe((result) => {
      this.loadingCtrl.dismiss();
      console.log(result);
      this.episodesData = result;
    });
  }
}
