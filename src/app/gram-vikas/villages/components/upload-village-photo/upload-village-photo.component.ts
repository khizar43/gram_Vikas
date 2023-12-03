import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-village-photo',
  templateUrl: './upload-village-photo.component.html',
  styleUrls: ['./upload-village-photo.component.css']
})
export class UploadVillagePhotoComponent {


  show = false;

  showAlert() {
    this.show = true;
  }
}
