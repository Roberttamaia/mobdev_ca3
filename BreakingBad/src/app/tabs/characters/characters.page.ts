import {Component, OnInit} from '@angular/core';
import {CharactersService} from "../../services/characters.service";
import {InfiniteScrollCustomEvent, LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  currentPage = 1;
  public charactersData: any;

  constructor(private service: CharactersService, private loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    this.loadCharacters();
  }

  async loadCharacters() {

    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: "bubbles"
    });
    await loading.present();

    this.service.getCharacters().subscribe((result) => {
      this.loadingCtrl.dismiss();
      console.log(result);
      this.charactersData = result;
    });

  }
}
