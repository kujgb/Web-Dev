from django.contrib import admin
from django.urls import path
from api.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/products/', ProductsView.as_view()),
    path('api/products/<int:product_id>/', ProductView.as_view()),
    path('api/categories/', CategoriesView.as_view()),
    path('api/categories/<int:category_id>/', CategoryView.as_view())
]