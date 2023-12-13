from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def fanPortrait(request):
    return render(request, "fanPortrait.html")