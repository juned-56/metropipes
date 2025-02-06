document.getElementById('inquiryForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    const message = document.getElementById('message').value;
  
    // Create the email body
    const subject = `Inquiry from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AAddress: ${address}%0D%0AContact: ${contact}%0D%0AMessage: ${message}`;
  
    // Open the default email client
    window.location.href = `mailto:metropipes1@gmail.com?subject=${subject}&body=${body}`;
  
    // Optional: Clear the form after submission
    document.getElementById('inquiryForm').reset();
  });