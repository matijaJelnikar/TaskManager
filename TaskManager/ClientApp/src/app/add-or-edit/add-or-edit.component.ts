import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
    selector: 'app-add-or-edit',
    templateUrl: './add-or-edit.component.html',
    styleUrls: ['./add-or-edit.component.css']
})
/** add-or-edit component*/
export class AddOrEditComponent implements OnInit {
  public taskItem: any;
  //@Input() taskItem: any;
  @Output() taskCreated = new EventEmitter<any>();

  constructor() {
    this.inittaskItem();
  }

  public addtaskItem() {
    this.taskCreated.emit(this.taskItem);
    this.inittaskItem();
  };

  public inittaskItem() {
    this.taskItem = {
      id: undefined,
      title: "",
      description: "",
      dueDate: undefined
    };
  }


  ngOnInit() {
  }
}

