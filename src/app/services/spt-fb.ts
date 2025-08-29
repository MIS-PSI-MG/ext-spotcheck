import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { ChecklistBase } from '../models/spt';

@Injectable({
  providedIn: 'root',
})
export class SptFb {
  firestore = inject(Firestore);
  SpotcheckCollection = collection(this.firestore, 'spotchecks');

  getSpotchecks(): Observable<ChecklistBase[]> {
    return collectionData(this.SpotcheckCollection, {
      idField: 'id',
    }) as Observable<ChecklistBase[]>;
  }
}
