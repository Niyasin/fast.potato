import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  constructor() { }
  shows:Show[] = [{id:0,title:'Lorem Ipsum',desc:'Lorem ipsum dolor',image:'p1.jpg'},{id:1,title:'Lorem Ipsum',desc:'Lorem ipsum dolor',image:'p2.jpg'},{id:2,title:'Lorem Ipsum',desc:'Lorem ipsum dolor',image:'p3.jpg'}]
  
  getAll(): Show[] {
    return this.shows;
  }

  get(id:number):Show{
    return this.shows[id];
  }

}


export interface Show{
  id:number,
  title:string,
  desc:string,
  image:string,
}