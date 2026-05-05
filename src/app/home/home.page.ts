import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonItem, IonInput, IonSelect, IonSelectOption,
  IonButton, IonList, IonItemSliding, IonLabel,
  IonItemOptions, IonItemOption, IonBadge, IonText, IonIcon
} from '@ionic/angular/standalone';
import { AlertController, ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trash, walletOutline } from 'ionicons/icons';

interface Harcama {
  adi: string;
  tutari: number;
  kategori: string;
  tarih: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonItem, IonInput, IonSelect, IonSelectOption,
    IonButton, IonList, IonItemSliding, IonLabel,
    IonItemOptions, IonItemOption, IonBadge, IonText, IonIcon
  ],
})
export class HomePage implements OnInit {
  harcamaAdi: string = '';
  harcamaTutari: number | null = null;
  secilenKategori: string = '';

  harcamalar: Harcama[] = [];
  toplamTutar: number = 0;

  kategoriler = [
    { ad: 'Market' },
    { ad: 'Ulaşım' },
    { ad: 'Fatura' },
    { ad: 'Eğlence' },
    { ad: 'Eğitim' },
    { ad: 'Diğer' }
  ];

  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {
    addIcons({ trash, walletOutline });
  }

  ngOnInit() {
    let kayitliVeriler = localStorage.getItem('harcamalar');
    if (kayitliVeriler != null) {
      this.harcamalar = JSON.parse(kayitliVeriler);
      this.toplamHesapla();
    }
  }

  async harcamaEkle() {
    if (this.harcamaAdi == '' || this.harcamaTutari == null || this.harcamaTutari <= 0 || this.secilenKategori == '') {
      const toast = await this.toastController.create({
        message: 'Lütfen tüm bilgileri eksiksiz giriniz.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
      return;
    }

    let bugun = new Date();
    let tarihMetni = bugun.getDate() + "/" + (bugun.getMonth() + 1) + "/" + bugun.getFullYear();

    let yeniHarcama: Harcama = {
      adi: this.harcamaAdi,
      tutari: this.harcamaTutari,
      kategori: this.secilenKategori,
      tarih: tarihMetni
    };

    this.harcamalar.push(yeniHarcama);

    localStorage.setItem('harcamalar', JSON.stringify(this.harcamalar));
    this.toplamHesapla();

    this.harcamaAdi = '';
    this.harcamaTutari = null;
    this.secilenKategori = '';

    const toast = await this.toastController.create({
      message: 'Harcama başarıyla eklendi.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async harcamaSil(harcama: Harcama) {
    const alert = await this.alertController.create({
      header: 'Silmeyi Onayla',
      message: harcama.adi + ' adlı harcamayı silmek istiyor musunuz?',
      buttons: [
        {
          text: 'Hayır',
          role: 'cancel'
        },
        {
          text: 'Evet',
          handler: () => {
            const index = this.harcamalar.indexOf(harcama);
            if (index > -1) {
              this.harcamalar.splice(index, 1);
              localStorage.setItem('harcamalar', JSON.stringify(this.harcamalar));
              this.toplamHesapla();

              this.toastController.create({
                message: 'Harcama silindi',
                duration: 2000
              }).then(toast => toast.present());
            }
          }
        }
      ]
    });

    await alert.present();
  }

  toplamHesapla() {
    this.toplamTutar = 0;

    for (let i = 0; i < this.harcamalar.length; i++) {
      this.toplamTutar = this.toplamTutar + this.harcamalar[i].tutari;
    }
  }

}
