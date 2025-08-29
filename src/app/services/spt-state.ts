import { Injectable, signal } from '@angular/core';
import { ChecklistBase } from '../models/spt';

@Injectable({
  providedIn: 'root',
})
export class SptState {
  spotcheckListSig = signal<ChecklistBase[]>([]);
}
