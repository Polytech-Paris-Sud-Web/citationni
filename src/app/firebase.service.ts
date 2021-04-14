import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private afStorage: AngularFireStorage
  ) { }

  getImageUrl(path) {
    return this.afStorage.storage.ref(path).getDownloadURL();
  }

}