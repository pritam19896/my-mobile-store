import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { PRODUCTS } from '../../mocks/products.mock';
import { Observable, range, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  numbers$: Observable<number> = range(0, 10);
  arrayOfNums$: Observable<number[]> = of([1, 2, 3], [5, 6]);
  obj$: Observable<any> = of({
    id: 1,
    name: 'Mobile'
  });

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:4200/assets/products.json')
      .pipe(
        catchError(this.handleError)
      );
    // return PRODUCTS;
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get('http://localhost:4200/assets/products.json')
      .pipe(
        catchError(this.handleError),
        map((products: Product[]) => {
          const product = products.find(p => p.id === id);
          return product;
        })
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      errorMessage = 'Client side error -> ' + error.error;
    } else {
      // server side error
      errorMessage = `Status: ${error.status}, body: ${error.error}`;
    }
    return throwError(errorMessage);
  }

  getNumbers(): Observable<number> {
    return this.numbers$;
  }

  getArrayofNums(): Observable<number[]> {
    // this.obj$.subscribe(data => console.log(data));
    return this.arrayOfNums$;
  }

}
