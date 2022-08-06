import { Component, Input, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Employee } from 'src/app/api/models/employee';

interface Paginator {
  leftAvailable: boolean;
  rightAvailable: boolean;
  pages: number[];
  actualPage: number;
  items: Employee[];
}

const DEFAULT_ITEMS_PER_PAGE = 6;

@Component({
  selector: 'employees-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() employees: Employee[] = [];
  @Input() itemsPerPage: number = DEFAULT_ITEMS_PER_PAGE;

  public paginator: Paginator;

  // font-awesome icons
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  ngOnInit(): void {
    this.initPaginator();
  }

  private initPaginator(): void {
    this.paginator = {
      leftAvailable: false,
      rightAvailable: false,
      actualPage: 1,
      pages: [],
      items: [],
    };
    const numPages = Math.ceil(this.employees.length/this.itemsPerPage);
    for (let i = 1; i <= numPages; i++) {
      this.paginator.pages.push(i);
    }
    this.loadPage(1);
  }

  public loadPage(page: number): void {
    this.paginator.actualPage = page;
    this.paginator.leftAvailable = page > 1;
    this.paginator.rightAvailable = page < this.paginator.pages.length;
    this.paginator.items = this.getPageItems(page);
  }
  
  private getPageItems(page: number): Employee[] {
    const start = (page-1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.employees.slice(start, end);
  }

  public navigateLeft(): void {
    this.loadPage(this.paginator.actualPage - 1);
  }

  public navigateRight(): void {
    this.loadPage(this.paginator.actualPage + 1);
  }

}
