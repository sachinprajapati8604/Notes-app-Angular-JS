import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-notes-item',
  templateUrl: './notes-item.component.html',
  styleUrls: ['./notes-item.component.css']
})
export class NotesItemComponent implements OnInit {

  @Input() notesObj: any

  searchKey = "";

  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
  }
  onDelete(i: any) {
    // let conf=confirm("are you sure want to delete");
    // if(conf==true){
    //   this.myservice.notes.splice(i,1);
    //   localStorage.setItem('angNotes',JSON.stringify(this.myservice.notes));
    // }else{
    //     alert("Your date is safe")
    // }
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.myservice.notes.splice(i, 1);
        localStorage.setItem('angNotes', JSON.stringify(this.myservice.notes));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
