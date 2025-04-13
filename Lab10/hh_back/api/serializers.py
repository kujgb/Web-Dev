from rest_framework import serializers
from .models import Company, Vacancy

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(max_length=255)
    description = serializers.CharField(allow_blank=True, required=False)
    salary = serializers.DecimalField(max_digits=10, decimal_places=2, allow_null=True, required=False)
    location = serializers.CharField(max_length=100)
    company_id = serializers.IntegerField(write_only=True)  
    company = CompanySerializer(read_only=True) 

    def create(self, validated_data):
        company_id = validated_data.pop('company_id')
        company = Company.objects.get(pk=company_id)
        vacancy = Vacancy.objects.create(company=company, **validated_data)
        return vacancy

    def update(self, instance, validated_data):
        company_id = validated_data.pop('company_id', None)
        if company_id:
            instance.company = Company.objects.get(pk=company_id)
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.location = validated_data.get('location', instance.location)
        instance.save()
        return instance