import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/_service/products.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  products: any;

  constructor(private product: ProductsService, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  getProduct($event: any) {
    this.spinner.show();
    this.product.getProducts($event.query, $event.source).subscribe(data => {
      this.spinner.hide()      
      this.products = data;      
    });
  }

  addProduct($event: any) {
    this.spinner.show();
    this.product.addProduct($event.product, $event.user, $event.threshold).subscribe(
    data => {
      this.spinner.hide();
      this.toastr.success('Successo', "Prodotto aggiunto correttamente");      
    },
    error => {
    this.spinner.hide();
    this.toastr.error('Errore', "Hai già aggiunto questo prodotto");    
    });
  }

}
