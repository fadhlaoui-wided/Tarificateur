import { Component } from '@angular/core';
import * as XLSX from 'xlsx'
import { Xliff } from '@angular/compiler';
import { FilterService } from './filter.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FilterService]
})
export class AppComponent {
  
  constructor(private filterService:FilterService){
  }
  data:[][];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'NEOLIANE TARIFS.xlsx';

  title = 'Tarificateur';
  onFileChange(evt:any){
  const target : DataTransfer= <DataTransfer>(evt.target);
    
  const reader : FileReader = new FileReader() ; 
  reader.onload=(e:any)=>{
const bstr :String = e.target.result;
const wb :XLSX.WorkBook = XLSX.read (bstr,{type:'binary'});
const wsname : string= wb.SheetNames[0];
const ws:XLSX.WorkSheet=wb.Sheets[wsname];
console.log(ws);
this.data=(XLSX.utils.sheet_to_json({header:1}));
console.log(this.data);
this.filterService.log("ddeededaoiejek") 

  };
  reader.readAsBinaryString(target.files[0]);
  }
}
