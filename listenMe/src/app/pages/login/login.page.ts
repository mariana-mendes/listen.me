import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../user";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { AuthService } from "src/app/service/auth.service";
import { UserService } from "src/app/service/user.service";
import { LoadingController, ToastController } from "@ionic/angular";
import { globalUser } from "../../global-user";
import { auth } from 'firebase';
import * as firebase from 'firebase';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  public disabled = false;
  public userLogin: User = {};
  private loading: any;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private authService: AuthService,
    private _userService: UserService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);
      await this._userService.getUserByEmail(this.userLogin.email).subscribe(user => {
        console.log(user)
      });
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async logout() {
    try {
      this.authService.logout();
    } catch (error) {
      this.presentToast(error.message);
    }
  }


  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: "Por favor, aguarde.."
    });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

  loginFacebook() {}

  loginGoogle() {}

  goRegister() {
    this.router.navigate(["register"]);
  }

  goRemember() {
    this.router.navigate(["lost-data"]);
  }

  ngOnInit() {}
}
