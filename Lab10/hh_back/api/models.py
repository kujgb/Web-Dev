from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=100)
    address = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Vacancy(models.Model):
    company = models.ForeignKey(Company, related_name='vacancies', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    salary = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    location = models.CharField(max_length=100, default='Unknown')  

    def __str__(self):
        return self.title
