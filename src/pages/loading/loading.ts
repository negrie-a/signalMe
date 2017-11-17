import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home'
import { SplashScreen } from '@ionic-native/splash-screen';
/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private splashScreen: SplashScreen) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
    this.splashScreen.show();

    setTimeout(() => {
      this.navCtrl.setRoot(HomePage, {}, {
        "animation": "ios-transition"
      })
    }, 3000);
  }

}
