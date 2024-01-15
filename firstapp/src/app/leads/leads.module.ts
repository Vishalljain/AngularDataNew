import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListListingComponent } from './list-listing/list-listing.component';
import { ListGridComponent } from './list-listing/list-grid/list-grid.component';
import { ListToolsComponent } from './list-listing/list-tools/list-tools.component';
import { DownloadExcelComponent } from './list-listing/list-tools/download-excel/download-excel.component';
import { DownloadPdfComponent } from './list-listing/list-tools/download-pdf/download-pdf.component';



@NgModule({
  declarations: [
    ListListingComponent,
    ListGridComponent,
    ListToolsComponent,
    DownloadExcelComponent,
    DownloadPdfComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
