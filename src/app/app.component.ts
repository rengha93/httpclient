import { Component ,OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface UsersResponse{
  login:string,
  bio:string,
  company:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'httpclient';

  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    // this.http.get<UsersResponse>('https://api.github.com/users/rengha93').subscribe(data=>{
    //   console.log("User Login"+data.login)
    //   console.log("User Bio"+data.bio)
    //   console.log("User company"+data.company)
    // },(err:HttpErrorResponse)=>{
    //   if(err.error instanceof Error){
    //     console.log("clinet side error")
    //   }
    //   else{
    //     console.log("serve side errror occured da!");
    //   }
    // });

  //   const req = this.http.post('http://jsonplaceholder.typicode.com/posts',{
  //     title:'dude',
  //     body:'dude-body',
  //     userId:1
  //   }).subscribe(res =>{
  //     console.log(res)
  //   },err=>{
  //     console.log("error occured")
  //   })
  // }
}
}
