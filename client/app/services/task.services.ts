import {Injectable} from '@angular/core'
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
    constructor(private http:Http){
        console.log('Task Service Initiated');
    }
    getTasks(){
      return this.http.get('http://localhost:3000/api/users')
        .map(res => res.json())
    }    
}