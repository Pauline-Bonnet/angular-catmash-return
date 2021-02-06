import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CatsService } from '../services/cats-service.service';
import { Cat } from '../models/models';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent {

  count: number = 0;
  @Input() cats: Cat[];
  @Input() selectedCat: Cat;
  @Input() cat: Cat;
  @Output('onSelectionCat') onSelectionCat: EventEmitter<Cat> = new EventEmitter<Cat>();

  constructor(private service: CatsService) { }

  onSelectCat(event: MouseEvent): void {
    event.stopPropagation();
    this.onSelectionCat.emit();
    this.service.incrementCount(this.cat);
    console.log('point', this.cat.points)
  }
}
