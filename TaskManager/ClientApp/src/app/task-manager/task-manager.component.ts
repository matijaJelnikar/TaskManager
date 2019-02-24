import { Component, OnInit, Input, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-task-manager',
    templateUrl: './task-manager.component.html',
    styleUrls: ['./task-manager.component.css']
})
/** task-manager component*/
export class TaskManagerComponent implements OnInit {
  public tasks: TaskItem[];
  private _http: Http;
  private _baseUrl: string;
  private headers: HttpHeaders;

  /** taskManager ctor */
  constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    this._http = http;
    this._baseUrl = baseUrl;
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    http.get(baseUrl + 'api/taskItems').subscribe(result => {
      this.tasks = result.json() as TaskItem[];
    }, error => console.error(error));
    console.log("refreshed list of tasks")
  }

  public createItem(item: any) {
    console.log("createItem fired")
    //let itemWithId;
   // this._http.post(this._baseUrl + 'api/taskItems/', item, { headers: this.headers, withCredentials: true });

    //itemWithId = _.find(this.itemsData, (el => el.id === item.id));

    //if (itemWithId) {
    //    const updateIndex = _.findIndex(this.itemsData, { id: itemWithId.id });
    //    this.listInteracionservice.update(item).subscribe(
    //        itemRecord => this.itemsData.splice(updateIndex, 1, item)
    //    );
    //} else {
    //    this.listInteracionservice.add(item).subscribe(
    //        itemRecord => this.itemsData.push(item)
    //    );
    //}

    //this.currentItem = this.setInitialValuesForItemsData();
  };

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
