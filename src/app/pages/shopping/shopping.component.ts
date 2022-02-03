import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { finalize } from 'rxjs';
import { Product } from 'src/app/models/models';
import { PublicService } from 'src/app/public.service';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {


  @ViewChild('fileUpload')
  fileUpload!: ElementRef<HTMLElement>;

  private formData: FormData = new FormData();
  public productList:Product[] = [];
  displayedColumns: string[] = ['productCode','descriptive', 'quantity', 'unitPrice', 'vatPercentage'];


  constructor(
    private shoppingService: ShoppingService,
    private publicService: PublicService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(){
    this.shoppingService.getProducts().subscribe( res =>{
      this.productList = res;
      this.publicService.showMsgSuccess("Products loaded with success!!");
    },
    err => {
      console.warn("Error: ", err);
      this.publicService.showMsgError("Error loading products.");
    })
  }


  fileChange(event:any) {
    let fileList: FileList = event?.target?.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        this.formData = formData;
        this.shoppingService.uploadProducts(formData)
        .pipe(
          finalize(() => this.getProducts())
        )
        .subscribe( res => {
          console.log( "upload ok", res);
        },
        err => {
          console.warn("error: ", err);
          this.publicService.showMsgError("Error uploading products.");
        });
    }
  }




triggerClickUpload() {
    let el: HTMLElement = this.fileUpload.nativeElement;
    el.click();
}

}
