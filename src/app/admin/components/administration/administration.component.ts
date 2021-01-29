import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {TagInterface} from '../../../core/interfaces/tag.interface';
import {TagsService} from '../../../core/services/tags.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})

export class AdministrationComponent implements OnInit {
  tags$: Observable<TagInterface[]>;
  columnHeader: string[] = ["name","iteration","created"];
  tags: [[]];
  other: string;
  longueur = 0;

  constructor(
    private tagService: TagsService,
  ) {
    this.tags$ = this.tagService.get();
  }

  ngOnInit(){
    this.tagService.get().subscribe(data => {
      this.tags = data;
      this.longueur = this.tags.length;
    })
  }

}

