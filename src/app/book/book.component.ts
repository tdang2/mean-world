import { Component, OnInit } from '@angular/core';
import { BookService } from '../api/book-api.service';
import { DataSource } from '@angular/cdk/collections';


export class BookDataSource extends DataSource<any> {
  constructor(private api: BookService) {
    super();
  }

  connect() {
    return this.api.getBooks();
  }

  disconnect() { }
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: any;
  displayedColumns = ['isbn', 'title', 'author'];
  dataSource = new BookDataSource(this.api);

  constructor(private api: BookService) { }

  ngOnInit() {
    this.api.getBooks().subscribe(res => {
      console.log(res);
      this.books = res;
    }, err => {
      console.log(err);
    });
  }

}
