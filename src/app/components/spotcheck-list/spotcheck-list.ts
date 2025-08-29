import { Component, inject, OnInit } from '@angular/core';
import { SptState } from '../../services/spt-state';
import { SptFb } from '../../services/spt-fb';

@Component({
  selector: 'app-spotcheck-list',
  imports: [],
  templateUrl: './spotcheck-list.html',
  styleUrl: './spotcheck-list.scss',
})
export class SpotcheckList implements OnInit {
  spotcheckService = inject(SptState);
  spotcheckFb = inject(SptFb);

  ngOnInit(): void {
    this.spotcheckFb.getSpotchecks().subscribe((sp) => console.log(sp));
  }
}
