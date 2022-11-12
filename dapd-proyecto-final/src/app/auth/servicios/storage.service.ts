import { Injectable, OnDestroy } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements OnDestroy {

  constructor(private storage: Storage) {
    this.init();
  }

  public async set(key: string, value: any) {
    await this.storage?.set(key, value);
  }

  public get(key: string): Observable<any>{
    return from(this.storage.get(key));
  }

  public remove(key: string){
    this.storage.remove(key);
  }

  ngOnDestroy(): void {
    this.storage.clear();
  }

  private async init() {
    await this.storage.create();
  }

}
