// src/app/company-list/company-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void 
    this.loadCompanies();
  }