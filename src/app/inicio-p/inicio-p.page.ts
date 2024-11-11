import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint, CapacitorBarcodeScannerTypeHintALLOption } from '@capacitor/barcode-scanner';

@Component({
  selector: 'app-inicio-p',
  templateUrl: './inicio-p.page.html',
  styleUrls: ['./inicio-p.page.scss'],
})
export class InicioPPage implements OnInit {

  result: string = ''


  constructor(public navCtrl : NavController,
    public alertController: AlertController,) { }

  ngOnInit() {
  }

  salir(){localStorage.removeItem('ingresadoP'); //modificar guard de profe y alumno
    this.navCtrl.navigateRoot('login-p');};

    name(){
      var usuarioP = localStorage.getItem('nombreP');
      return usuarioP}


      async scan(): Promise<void> {
        const result = await CapacitorBarcodeScanner.scanBarcode({
          hint: CapacitorBarcodeScannerTypeHint.ALL
        });
        this.result = result.ScanResult;
      }


      async mensaje(){const alert = await this.alertController.create({
  header: 'Lo sentimos',
  message: 'Por el momento no se encuentra disponible la generacion de qr',
  buttons: ['Aceptar'],
});
await alert.present();}

}
