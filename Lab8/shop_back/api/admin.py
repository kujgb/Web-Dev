from django.contrib import admin
from .views import Product, Category

admin.site.register(Product)
admin.site.register(Category)