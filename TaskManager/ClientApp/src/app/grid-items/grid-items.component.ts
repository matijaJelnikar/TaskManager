import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-grid-items',
    templateUrl: './grid-items.component.html',
    styleUrls: ['./grid-items.component.css']
})
/** grid-items component*/
export class GridItemsComponent {
  @Input() tasks: TaskItem[];
  @Output() taskDeleted = new EventEmitter<any>();
  constructor() {

  }

  public deleteTask(taskData) {
    this.taskDeleted.emit(taskData);
  }

}



interface TaskItem {
  id: number;
  dateCreated: Date;
  title: string;
  description: string;
  dueDate: Date;
}
