import { ElementRef, QueryList, ViewChild } from '@angular/core';
import { Component, Input, AfterViewInit, SimpleChanges, Inject } from '@angular/core';
import { CompanyDataService } from '../services/company-data.service';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from "@angular/router";
import { ViewChildren } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})

export class TableDataComponent implements AfterViewInit {

  @Input() company: any = 0;
  company_name :any ;
  sectors:any;
  sector_attributes : string[] = [];
  slideIndex = 1;
  public attributes:string[];
  private page = 0; // gives us the current paage that must be visible
  @ViewChildren('sector')sector!: QueryList<ElementRef>;
  @ViewChild('body', { static: false })body: ElementRef;

  constructor(
    private list: CompanyDataService,
    public dialog: MatDialog,
    private router: Router,
  ){} 
   
  ngAfterViewInit(): void 
  {}

  public plusSlides(n:number)
  {
    this.pageChange(this.page + n );
  }

  public currentSlide(n:number) {
    this.pageChange(this.page = n);
  }

  private pageChange(pageNo : number )
  {
    let arr = this.sector.toArray();
    let len = arr.length;
    if( pageNo < 0 )
      this.page = len - 1;
    else if( pageNo > len - 1 )
      this.page = 0;
    else
      this.page = pageNo;
    for( var i = 0; i < arr.length ; i++ )
      if( i != this.page )
        arr[i].nativeElement.style = "display:none";   
    arr[this.page].nativeElement.style = "display:block";
  }

  //opens the dialog-box
  openPopUp(message:string[], attribute : string)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data =  [ message, attribute ];
    dialogConfig.width = '80vh';
    console.log(dialogConfig);
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

  }
  
  //is called on clicking the plus-sign
  redirect_message(sector:string, company:string)
  {
    this.router.navigate(['/dummy'], {state:{company:company,sector:sector}}); //this is the history varaible in dummy page
  }

  //the function gets called when  project-details.component.html changes i.e. is dropdown value change
  ngOnChanges(changes: SimpleChanges) 
  {  
    if(this.sector)
      this.body.nativeElement.style = "display:block";
    
    this.attributes = ['skills', 'materials', 'projects', 'factors', 'atributes']//attribute names common for all companies

    for (let propName in changes)//gives us the selected company's name
      this.company_name = changes[propName].currentValue;
    
    if( this.company == "")
      this.sectors = {};
    else 
    {// to get the various sectors present in a company
    this.list.getAttributeDetails01(this.company).subscribe((response: any) => {
      this.sectors = response;
    });
    
  }
  }

  ngAfterViewChecked()
  {
    
    if(this.company != "")
    {
      let arr = this.sector.toArray(); 
      for( var i = 0; i < arr.length ; i++ )
      {
        if( i != this.page)
        arr[i].nativeElement.style = "display:none;";

        else
          arr[i].nativeElement.style = "display:block;";
      }
    }
  }
}



