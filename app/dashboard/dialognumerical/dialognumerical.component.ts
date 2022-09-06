import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-dialognumerical',
  templateUrl: './dialognumerical.component.html',
  styleUrls: ['./dialognumerical.component.css']
})
export class DialognumericalComponent implements OnInit {

  numericalName : string;
  subCategoryString : string;

  constructor(public dialogRef: MatDialogRef<DialognumericalComponent>, private citiesService : CitiesService) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  onSubmit(): void {
    if (this.numericalName === '' || this.numericalName === ' ' || this.numericalName === undefined){ 
      alert('Category cannot be empty');
      return;
    }
    let numericalName: string = this.numericalName.trim();
    /*this.citiesService.postNewNumerical(numericalName).subscribe((res: any) => {
      console.log(res)
      this.dialogRef.close();
    });*/  
  }

}
