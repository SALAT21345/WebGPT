from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'is_staff', 'tokens')  # 👈 токены видны в списке
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('tokens',)}),  # 👈 токены редактируемы в форме
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('tokens',)}),
    )

admin.site.register(CustomUser, CustomUserAdmin)