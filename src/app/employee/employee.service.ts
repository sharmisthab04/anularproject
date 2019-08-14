import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IEEmployee1} from "./iemployee";

@Injectable()
export class employeeService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://jsonblob.com/api/1aa20ccd-be66-11e9-bd8b-f74fa241c195';
  baseUrl1 : string = 'https://jsonblob.com/api/a62a9c0b-be67-11e9-bd8b-83e570f51671';
  getUsers() {
    return this.http.get<IEEmployee1[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<IEEmployee1>(this.baseUrl1 + '/' + id);
  }

  createUser(user: IEEmployee1) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: IEEmployee1) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}

