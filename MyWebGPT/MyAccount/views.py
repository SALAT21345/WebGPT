from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from .forms import CustomUserCreationForm
User = get_user_model()
@login_required
def profile_view(request):
    return render(request, 'MyAccount/profile.html')


def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')  # Или на страницу профиля
    else:
        form = CustomUserCreationForm()
    return render(request, 'registration/register.html', {'form': form})