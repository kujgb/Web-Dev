import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from './models/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private apiUrl = 'http://127.0.0.1:8000/api/cbv/vacancies/'; // Adjust if needed
  private companyVacanciesUrl = 'http://127.0.0.1:8000/api/cbv/companies/'; // Adjust if needed

  constructor(private http: HttpClient) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.apiUrl);
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.apiUrl}${id}/`);
  }

  getCompanyVacancies(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.companyVacanciesUrl}${companyId}/vacancies/`);
  }
}