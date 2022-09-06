import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CitiesService } from 'src/app/services/cities.service';
@Component({
  selector: 'app-dialogcategorical',
  templateUrl: './dialogcategorical.component.html',
  styleUrls: ['./dialogcategorical.component.css']
})
export class DialogcategoricalComponent implements OnInit {

  categoryName : string;
  subCategoryString : string;

  constructor(public dialogRef: MatDialogRef<DialogcategoricalComponent>, private citiesService : CitiesService) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  onSubmit(): void {
    if (this.categoryName === '' || this.categoryName === ' ' || this.categoryName === undefined){ 
      alert('Category cannot be empty');
      return;
    }

    if (this.subCategoryString === '' || this.subCategoryString === ' ' || this.subCategoryString === undefined){
      alert('Subcategory cannot be empty');
      return;
    }
    
    let subCategoryList : string[] = this.subCategoryString.split(',');
    
    for( const element of subCategoryList){
      if (element === '' || element === ' ' || element === undefined){
        alert('Subcategory cannot be empty');
        return;
      }
    }

    subCategoryList.map((value) => {
      let subCategoryName: string = value.trim();
      let categoryName: string = this.categoryName.trim();
      //this.citiesService.postNewCategoricalorSubCategory(categoryName, subCategoryName).subscribe((res: any) => console.log(res));  
    });

    this.dialogRef.close();
  }

}
