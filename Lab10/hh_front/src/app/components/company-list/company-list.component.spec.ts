import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { VacancyService } from '../../services/vacancy.service';
import { Company } from '../../interfaces/company';
import { Vacancy } from '../../interfaces/vacancy';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];

  constructor(private companyService: CompanyService, private vacancyService: VacancyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

  showVacancies(companyId: number): void {
    this.vacancyService.getVacanciesByCompany(companyId).subscribe((data) => {
      this.vacancies = data;
    });
  }
}
