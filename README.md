# Image Annotation App

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
The Image Annotation App is a web-based platform developed using Django, designed to facilitate the annotation of images for various tasks. Whether you're working on machine learning projects, data labeling, or simply organizing visual content, this application provides an intuitive interface to manage and view annotations effectively.

## Features
- **Image Management**: Upload, view, and delete images with ease.
- **Annotation Creation**: Annotate images using different types such as bounding boxes, polylines, points, and polygons.
- **JSON-Based Annotation Data**: Store annotation details in a structured JSON format for flexibility and scalability.
- **User Authentication**: Secure access to annotation functionalities with user login and permissions.
- **Admin Interface**: Manage images and annotations seamlessly through Django's robust admin panel.
- **Responsive Design**: A sleek and responsive UI built with Bootstrap ensures optimal viewing across devices.
- **Dark Mode Toggle**: Enhance user experience with a switchable dark mode theme.

## Technologies Used
### Backend:
- **Django** – A high-level Python web framework.
- **Django REST Framework** – For building APIs (if applicable).

### Frontend:
- **Bootstrap** – For responsive design and styling.
- **Font Awesome** – Icon toolkit for visual enhancements.
- **Prism.js** – (Optional) For syntax highlighting of JSON data.

### Database:
- **MySQL** – Django database for development.
- **PostgreSQL** – For production environments.

### Others:
- **Git** – Version control system.

## Installation
Follow these steps to set up the Image Annotation App on your local machine:

### Prerequisites
- Python 3.7 or higher
- pip (Python package manager)
- Git

### Steps

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Donrington/labelbox.git
    cd labelbox
    ```

2. **Create a Virtual Environment**:
    It's recommended to use a virtual environment to manage dependencies.
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Apply Migrations**:
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

5. **Create a Superuser**:
    To access the Django admin interface.
    ```bash
    python manage.py createsuperuser
    ```
    Follow the prompts to set up your admin account.

6. **Run the Development Server**:
    ```bash
    python manage.py runserver
    ```
    Access the application at [https://labelbox-hja1.onrender.com/](https://labelbox-hja1.onrender.com/).

## Usage

### Accessing the Application
#### Home Page
Upon accessing the root URL, you'll see a list of images available for annotation. Each image card provides options to annotate, view existing annotations, or delete the image.

#### Annotating an Image
1. Click the **Annotate** button on an image card.
2. A form will appear where you can input annotation data in JSON format.
3. Submit the form to save the annotation.

#### Viewing Annotations
1. Click the **View Annotations** button on an image card.
2. This will display all annotations related to the selected image in a readable JSON format.

#### Deleting an Image
1. Click the **Delete** button on an image card.
2. Confirm the deletion to remove the image and all its associated annotations.

#### Admin Interface
1. Access the admin panel at [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/) using your superuser credentials.
2. Manage images and annotations directly through the admin interface.

#### Dark Mode
Use the Dark Mode toggle in the navigation bar to switch between light and dark themes, enhancing visual comfort during extended use.

## Project Structure

```plaintext
labelbox/
├── annotations/
│   ├── migrations/
│   ├── static/
│   │   ├── css/
│   │   │   └── styles.css
│   │   ├── js/
│   │   │   └── annotate.js
│   ├── templates/
│   │   ├── annotate.html
│   │   ├── view_annotations.html
│   │   └── confirm_delete.html
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── labelbox/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── manage.py
├── requirements.txt
└── README.md


Contact
Abakwe Carrington
CyberSage
Email: carryoby@gmail.com
GitHub: https://github.com/Donrington
LinkedIn: https://www.linkedin.com/in/carrington-abakwe-b0b0a0217