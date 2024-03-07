# Setting up a Django Project with 'pipenv' and a 'Pipfile'

#### 1. Install Pipenv (if you haven't already) :

```python
  pip install pipenv
```
#### 2. Create a New Project Directory :

#### 3. Initialize a Pipenv Environment :
```python
  pipenv --python 3.11 
  or 
  pipenv install django
```

#### 4. Install Necessary Python Packages :
```python
  pipenv install django
```

#### 5. Activate the Virtual Environment :

```python
  pipenv shell
```

#### 6. Start the New Django Project (on Terminal) :
```Terminal
  django-admin startproject project_name
```

#### 7. Start a New App within the Project :
```Terminal
  python manage.py startapp app_name
```

#### 8. Create Models and Make Migrations : 
```Terminal
  python manage.py makemigrations

  python manage.py migrate
```

#### 9. Create a Superuser (Admin User) :
```
  python manage.py createsuperuser
```

#### 10. Start the Development Server :
```
  python manage.py runserver
```

