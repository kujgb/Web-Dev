export interface Vacancy {
    id: number;
    title: string;
    description?: string;
    salary?: number;
    location: string;
    company: Company; 
}