import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {
  notesForm= new FormGroup({
    title:new FormControl(null,[Validators.required]),
    desc:new FormControl(null,[Validators.required]),
  })

  check=false;
  localData:any=[];
  notesData:any=[];
  success=false;
  suceessMsg="";

  constructor(public myservice:MyserviceService) { }


  ngOnInit(): void {
    this.getNotesData();
  }

  getNotesData(){
    this.localData=localStorage.getItem('angNotes');
    if(this.myservice.notes=JSON.parse(this.localData)==null){
      this.myservice.notes=[];
    }else{
      this.myservice.notes=JSON.parse(this.localData);
    }
    // console.log(this.myservice.notes);
  }

  successAlert(){
    this.success=true;
    this.suceessMsg="Notes added successfully!";
    setTimeout(()=>{
        this.success=false;
    },3000)
  }

  onSubmit(){
    // console.log(this.notesForm.value);
    if(!this.notesForm.valid){
      Swal.fire("Please fill both fields");
    }else{
      this.check=true;
      console.log(this.notesForm.value);
      this.myservice.addNotes(this.notesForm.value);
      localStorage.setItem('angNotes',JSON.stringify(this.myservice.notes));
      this.notesForm.reset();
      this.getNotesData();
      this.successAlert();
    }
  }

 

}
