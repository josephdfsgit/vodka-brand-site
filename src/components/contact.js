import '../styles/contact.scss';

export const Contact = async () => {
    const today = new Date().toLocaleDateString('en-US');
    const submitBtn = document.getElementById('submit-btn');
    const messageForm = document.getElementById('message-us');

    submitBtn.addEventListener('click', async(event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const formData = new FormData(messageForm); // Gather form data
        const messageData = {
            date: today,
            name: formData.get('name'),
            company: formData.get('company'),
            email: formData.get('email'),
            address: formData.get('address'),
            phone: formData.get('phone'),
            message: formData.get('message')
        }
        try {
            // Send the POST request using fetch
            const response = await fetch('http://localhost:3003/messages/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(messageData)
            });
            const responseData = await response.json();
            
            if (response.ok && responseData._id) {
                console.log('Message sent successfully:', responseData);
                window.location.href = '/message';
            } else {
                console.log('Message validation failed or response data is not as expected:', responseData);
                // Handle this scenario, like showing an error message to the user
            }
        } catch (error) {
            console.error('Error saving order:', error);
            // Handle errors, e.g., show an error message to the user
        } 
    })
};