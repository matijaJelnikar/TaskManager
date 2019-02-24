import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-grid-items',
    templateUrl: './grid-items.component.html',
    styleUrls: ['./grid-items.component.css']
})
/** grid-items component*/
export class GridItemsComponent {
  @Input() tasks: TaskItem[];
  constructor() {

  }
}

interface TaskItem {
  id: number;
  dateCreated: Date;
  title: string;
  description: string;
  dueDate: Date;
}
