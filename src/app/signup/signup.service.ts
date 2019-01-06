import { Injectable } from '@angular/core';
import { AngularFirestore ,AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  authenticated:any=false;
  
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;
  constructor(private angularFirestore:AngularFirestore) { }
  getNoOfUsers(){
    this.itemDoc = this.angularFirestore.doc<any>('weather/userId');
    this.item = this.itemDoc.valueChanges();
    return this.item;
  }
  updateNoOfUsers(item){
    this.itemDoc.update(item);
  }
}
