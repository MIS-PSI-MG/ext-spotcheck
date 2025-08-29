import { Component, inject, OnInit } from '@angular/core';
import { SptState } from '../../services/spt-state';
import { SptFb } from '../../services/spt-fb';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spotcheck-list',
  imports: [CommonModule],
  templateUrl: './spotcheck-list.html',
  styleUrl: './spotcheck-list.scss',
})
export class SpotcheckList implements OnInit {
  spotcheckService = inject(SptState);
  spotcheckFb = inject(SptFb);

  ngOnInit(): void {
    this.spotcheckFb.getSpotchecks().subscribe((data) => {
      this.spotcheckService.spotcheckListSig.set(data);
    });
  }
}
