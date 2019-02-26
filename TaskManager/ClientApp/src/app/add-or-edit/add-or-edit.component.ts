import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';


@Component({
    selector: 'app-add-or-edit',
    templateUrl: './add-or-edit.component.html',
    styleUrls: ['./add-or-edit.component.css']
})
/** add-or-edit component*/
export class AddOrEditComponent implements OnInit {
  public taskItem: TaskItem;
  //@Input() taskItem: any;
  @Output() taskCreated = new EventEmitter<any>();

  constructor() {
    this.inittaskItem();
  }

  public addtaskItem() {
    this.taskItem.dateCreated = new Date();
    this.taskCreated.emit(this.taskItem);
    this.inittaskItem();
  };

  public inittaskItem() {
    this.taskItem = {
      id: undefined,
      dateCreated: null,
      title: "",
      description: "",
      dueDate: null
    };
  }


  ngOnInit() {
  }
}

interface TaskItem {
  id: number;
  dateCreated: Date;
  title: string;
  description: string;
  dueDate: Date;
}

