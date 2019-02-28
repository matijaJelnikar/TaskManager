import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';
import { not } from '@angular/compiler/src/output/output_ast';


@Component({
    selector: 'app-add-or-edit',
    templateUrl: './add-or-edit.component.html',
    styleUrls: ['./add-or-edit.component.css']
})
/** add-or-edit component*/
export class AddOrEditComponent implements OnInit {
  public taskItem: TaskItem;
  @Output() taskCreated = new EventEmitter<any>();

  constructor() {
    this.inittaskItem();
  }

  public addtaskItem() {
    if (this.taskItem.dueDate != null && this.taskItem.title != "" && this.taskItem.description != "") {
        this.taskItem.dateCreated = new Date();
        this.taskCreated.emit(this.taskItem);
        this.inittaskItem();
    }
    else
      alert("Cannot add task item! please fill all the fields and retry ...")  
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

