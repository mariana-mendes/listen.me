import { Component, OnInit } from "@angular/core";
import * as _ from "underscore";
import { Router } from "@angular/router";
import { UserService } from "src/app/service/user.service";
import { User } from "src/app/types/user";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { InvalidDataModalComponent } from "../../invalid-data-modal/invalid-data-modal.component";
import { ModalController, LoadingController, ToastController } from "@ionic/angular";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  public user: User = {
    username: "",
    email: "",
    password: "",
    user: []
  };

  private loading: any;

  emailMatchValidator(g: FormGroup): any {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(g.get("email")).toLowerCase());
  }

  formRegister = new FormGroup(
    {
      username: new FormControl(this.user.username, Validators.required),
      email: new FormControl(this.user.email),
      password: new FormControl(this.user.password, Validators.minLength(6))
    },
    this.emailMatchValidator
  );

  constructor(
    private authService: AuthService,
    private _userService: UserService,
    private router: Router,
    private modalController: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  goLogin() {
    this.router.navigate(["login"]);
  }

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: InvalidDataModalComponent,
      componentProps: { value: 123 },
      cssClass: "invalid-data-modal-css"
    });
    return await modal.present();
  }

  async register() {
    await this.presentLoading();

    try {
      await this.authService.register(this.formRegister.value);
      await this._userService
        .addUser(this.formRegister.value)
        .subscribe(user => console.log("new user created"));
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: "Por favor, aguarde.."
    });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 4000 });
    toast.present();
  }


}
