## Setup
- Have `Pip` and `Python` installed in your machine

- Create a virtual environment for your Python project. A virtual environment is a self-contained environment that allows you to isolate your project dependencies and avoid conflicts with other projects. Learn more here.
- Install the Python virtualenv package using the command 
```
pip install virtualenv
```
- Create a virtual environment by running the command in the root folder of your repository.
```
virtualenv venv
``` 
- Activate the virtual environment by running the command 
```
source venv/bin/activate
``` 
or depending on your operating system.
```
venv/bin/activate
``` 
- Configure your IDE to use the Python interpreter from your virtual environment. This ensures that your project dependencies are properly recognized and used. Here is a guide for VS Code.
- Install the project dependencies by running the command 
```
pip install -r requirements.txt
```
- Set up the database by running the commands 
```
python manage.py makemigrations
```
```
python manage.py migrate
```
- Finally, start the development server by running the command 
```
python manage.py runserver
```