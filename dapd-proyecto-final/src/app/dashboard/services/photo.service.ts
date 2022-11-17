import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Platform } from '@ionic/angular';



@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photo: UserPhoto =  { filepath: 'user.svg', webviewPath: 'assets/user.svg'};
  private PHOTO_STORAGE: string = 'photos';

  constructor(private platform: Platform) {
  }

  public async loadSaved() {
    // await Preferences.clear();
    // Retrieve cached photo data
    const photo = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photo = JSON.parse(photo.value);

    // If running on the web...
    if (this.photo && !this.platform.is('hybrid')) {
      // Display the photo by reading into base64 format
      // Read  saved photo's data from the Filesystem
        const readFile = await Filesystem.readFile({
          path: this.photo.filepath,
          directory: Directory.Data,
        });

        // Web platform only: Load the photo as base64 data
        this.photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }
      this.photo??= { filepath: 'user.svg', webviewPath: '../../assets/user.svg'};
  }

  /* Use the device camera to take a photo:
  // https://capacitor.ionicframework.com/docs/apis/camera

  // Store the photo data into permanent file storage:
  // https://capacitor.ionicframework.com/docs/apis/filesystem

  // Store a reference to all photo filepaths using Storage API:
  // https://capacitor.ionicframework.com/docs/apis/storage
  */
  public async addNewToGallery() {
    await Preferences.clear();
    // Take a photo
    let capturedPhoto =  await Camera.getPhoto({
      resultType: CameraResultType.Uri, // file-based data; provides best performance
      source: CameraSource.Camera, // automatically take a new photo with the camera
      quality: 100, // highest quality (0 to 100)
    });

    const savedImageFile = await this.savePicture(capturedPhoto);

    // Add new photo
    this.photo = savedImageFile;

    // Cache all photo data for future retrieval
    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photo),
    });
  }

  // Save picture to file on device
  private async savePicture(photo: Photo) {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(photo);

    // Write the file to the data directory
    const fileName = 'user.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    if (this.platform.is('hybrid')) {
      // Display the new image by rewriting the 'file://' path to HTTP
      // Details: https://ionicframework.com/docs/building/webview#file-protocol
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      // Use webPath to display the new image instead of base64 since it's
      // already loaded into memory
      return {
        filepath: fileName,
        webviewPath: photo.webPath,
      };
    }
  }

  // Read camera photo into base64 format based on the platform the app is running on
  private async readAsBase64(photo: Photo) {
    // "hybrid" will detect Cordova or Capacitor
    if (this.platform.is('hybrid')) {
      // Read the file into base64 format
      const file = await Filesystem.readFile({
        path: photo.path,
      });

      return file.data;
    } else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();

      return (await this.convertBlobToBase64(blob)) as string;
    }
  }
  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
}

export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}
