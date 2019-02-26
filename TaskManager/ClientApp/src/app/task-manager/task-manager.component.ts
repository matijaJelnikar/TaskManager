import { Component, OnInit, Input, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestService } from '../rest.service';

@Component({
    selector: 'app-task-manager',
    templateUrl: './task-manager.component.html',
    styleUrls: ['./task-manager.component.css']
})
/** task-manager component*/
export class TaskManagerComponent implements OnInit {
  public tasks: any[];
  public errorMessage: string;

  constructor(private _restService: RestService) {
    _restService.get().subscribe((data: any) => this.tasks = data);

  }

  public createItem(item: any) {
    console.log("createItem fired")

    this._restService.add(item).subscribe(
            itemRecord => this.tasks.push(item)
    );
  };

  public deleteClicked(record) {
    console.log("deleteItem fired")
    const deleteIndex = this.tasks.indexOf(record);
    this._restService.remove(record).subscribe((res: any) => this.tasks.splice(deleteIndex, 1));
   
  };



  ngOnInit() {
  }

}

interface TaskItem {
  dateCreated: Date;
  title: string;
  description: string;
  dueDate: Date;
}
