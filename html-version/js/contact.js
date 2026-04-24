/* ============================================
   CONTACT FORM LOGIC & VALIDATION
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('btn-submit');
    const successMessage = document.getElementById('form-success');

    // Basic Validation Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateInput(input, condition) {
        const formGroup = input.parentElement;
        if (condition) {
            formGroup.classList.remove('error');
            return true;
        } else {
            formGroup.classList.add('error');
            return false;
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload

        // Validate all fields
        const isNameValid = validateInput(nameInput, nameInput.value.trim().length > 0);
        const isEmailValid = validateInput(emailInput, emailRegex.test(emailInput.value.trim()));
        const isMessageValid = validateInput(messageInput, messageInput.value.trim().length > 10);

        if (isNameValid && isEmailValid && isMessageValid) {
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // Siapkan data untuk dikirim
            const formData = new FormData();
            formData.append('name', nameInput.value.trim());
            formData.append('email', emailInput.value.trim());
            formData.append('message', messageInput.value.trim());

            // URL Endpoint Formspree Anda
            const formspreeEndpoint = 'https://formspree.io/f/mvzddrwg';

            // Mengirim data ke Formspree (Aktif)
            fetch(formspreeEndpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    showSuccess();
                } else {
                    alert('Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
                    submitBtn.classList.remove('loading');
                    submitBtn.disabled = false;
                }
            }).catch(error => {
                alert('Maaf, terjadi kesalahan jaringan. Periksa koneksi internet Anda.');
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            });
        }
    });

    function showSuccess() {
        submitBtn.classList.remove('loading');
        successMessage.classList.add('show');
        form.reset();
        setTimeout(() => {
            successMessage.classList.remove('show');
            submitBtn.disabled = false;
        }, 5000);
    }

    // Real-time validation removal on input
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', () => {
            input.parentElement.classList.remove('error');
        });
    });
});
