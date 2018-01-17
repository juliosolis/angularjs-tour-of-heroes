import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Hero} from '../hero';
import {HeroeService} from '../heroe.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroeService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
