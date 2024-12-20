document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('annotation-form');
    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            const annotationInput = document.getElementById('annotation');
            const annotationData = annotationInput.value.trim();
            const imageId = window.location.pathname.split('/').filter(Boolean).pop();

            // Remove existing alerts
            const existingAlerts = document.querySelectorAll('.alert');
            existingAlerts.forEach(alert => alert.remove());

            if (!annotationData) {
                showAlert('Please enter annotation data.', 'danger');
                return;
            }

            try {
                const response = await fetch(`/annotate/${imageId}/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': getCookie('csrftoken'),
                    },
                    body: JSON.stringify({ annotation: annotationData }),
                });

                const result = await response.json();

                if (response.status === 201) {
                    showAlert(result.message, 'success');
                    // Optionally, redirect after a short delay
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 1500);
                } else {
                    showAlert(result.error, 'danger');
                }
            } catch (error) {
                console.error('Error:', error);
                showAlert('An error occurred while saving the annotation.', 'danger');
            }
        });
    }

    // Dark Mode Toggle
// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('bg-dark');
        document.body.classList.toggle('text-white');
        
        // Toggle card backgrounds and text
        document.querySelectorAll('.card').forEach(card => {
            card.classList.toggle('bg-secondary');
            card.classList.toggle('bg-light');
            card.classList.toggle('text-white');
            card.classList.toggle('text-dark');
        });

        // Toggle navbar theme
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.toggle('navbar-dark');
            navbar.classList.toggle('navbar-light');
            navbar.classList.toggle('bg-dark');
            navbar.classList.toggle('bg-light');
        }

        // Toggle button themes
        document.querySelectorAll('.btn-primary').forEach(btn => {
            btn.classList.toggle('btn-primary');
            btn.classList.toggle('btn-outline-primary');
        });
        document.querySelectorAll('.btn-secondary').forEach(btn => {
            btn.classList.toggle('btn-secondary');
            btn.classList.toggle('btn-outline-secondary');
        });
        document.querySelectorAll('.btn-success').forEach(btn => {
            btn.classList.toggle('btn-success');
            btn.classList.toggle('btn-outline-success');
        });
        document.querySelectorAll('.btn-info').forEach(btn => {
            btn.classList.toggle('btn-info');
            btn.classList.toggle('btn-outline-info');
        });
        document.querySelectorAll('.btn-danger').forEach(btn => {
            btn.classList.toggle('btn-danger');
            btn.classList.toggle('btn-outline-danger');
        });
    });
}
});

// Function to display Bootstrap alerts// Function to display Bootstrap alerts
function showAlert(message, type) {
    const container = document.querySelector('.container');
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    container.prepend(alertDiv);
}

// Function to get CSRF token from cookies
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
