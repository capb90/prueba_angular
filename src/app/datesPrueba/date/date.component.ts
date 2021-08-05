import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  oldDate?:Date
  newDate?:Date

  constructor() { 
  }

  ngOnInit(): void {
    const date:string= '2021-08-04T18:03:12.018959';
    const due_date=new Date(date);
    console.log(due_date)
    this.oldDate=due_date;
    const NewDate=this.sumarDias(due_date,37);
    this.newDate=NewDate; 
  }

  sumarDias(fecha:Date,dias:number){
    const newDAte=fecha.setDate(fecha.getDate()+dias);
    const fechaNueva=new Date(newDAte);
    
    return fechaNueva;
  }

}
