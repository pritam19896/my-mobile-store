import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/product.service';
import { map, filter, delay, takeUntil } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  ratingToShow: number;
  products: Product[];
  filteredProducts: Product[];

  tableHeader = {
    'background-color': 'black',
    color: 'white'
  };

  showImage = false;

  @ViewChild('btn', {static: true}) btn: ElementRef;
  subscription$;
  unsubscription$ = new Subject();

  errorMessage = '';

  private fb = '';
  get filterBy() {
    return this.fb;
  }
  set filterBy(fl: string) {
    this.fb = fl;
    this.filteredProducts = this.products.filter(product => {
      return product.name.toLowerCase().includes(this.fb.toLowerCase());
    });
  }

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = this.filteredProducts = data;
    }, error => {
      console.log(error);
      this.errorMessage = error;
    });

    this.productService.getNumbers()
      .pipe(
        takeUntil(this.unsubscription$),
        map(x => x * 2),
        filter(x => x % 2 === 0),
        // delay(5000)
      )
      .subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      }, () => console.log('Complete'));

    console.log(this.btn);

    // this.subscription$ = fromEvent(this.btn.nativeElement, 'click')
    fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        takeUntil(this.unsubscription$),
        delay(1000)
      )
      .subscribe(data => {
        console.log(data);
      });

    /* this.productService.getArrayofNums().subscribe(data => {
      console.log(data);
    }); */

    // this.productService.getNumbers().subscribe(data => console.log('Second subscription -> ', data));
  }

  unsubscribe() {
    // this.subscription$.unsubscribe();
    this.unsubscription$.next();
    this.unsubscription$.unsubscribe();
  }

  toggleImage(event: MouseEvent) {
    console.log(event);
    this.showImage = !this.showImage;
  }

  onRatingClick(rating: number) {
    console.log('rating clicked -> ', rating);
    this.ratingToShow = rating;

    const p = new Product();
    console.log(p);
  }

  ngOnDestroy() {
    // this.subscription$.unsubscribe();
    this.unsubscription$.next();
    this.unsubscription$.unsubscribe();
  }
}
