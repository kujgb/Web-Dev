from django.urls import path
from . import views

urlpatterns = [
    path('fbv/companies/', views.company_list, name='fbv_company_list'),
    path('fbv/companies/<int:pk>/', views.company_detail, name='fbv_company_detail'),
    path('fbv/vacancies/', views.vacancy_list, name='fbv_vacancy_list'),
    path('fbv/vacancies/<int:pk>/', views.vacancy_detail, name='fbv_vacancy_detail'),
    path('fbv/companies/<int:company_id>/vacancies/', views.company_vacancies, name='fbv_company_vacancies'),

    path('cbv/companies/', views.CompanyList.as_view(), name='cbv_company_list'),
    path('cbv/companies/<int:pk>/', views.CompanyDetail.as_view(), name='cbv_company_detail'),
    path('cbv/vacancies/', views.VacancyList.as_view(), name='cbv_vacancy_list'),
    path('cbv/vacancies/<int:pk>/', views.VacancyDetail.as_view(), name='cbv_vacancy_detail'),
    path('cbv/companies/<int:company_id>/vacancies/', views.CompanyVacancies.as_view(), name='cbv_company_vacancies'),
]